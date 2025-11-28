
import React, {useState} from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import * as XLSX from 'xlsx'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function Dashboard(){
  const [chartData,setChartData]=useState(null)
  const [fileName,setFileName]=useState('')

  const handleFile = async (e)=>{
    const file = e.target.files[0]
    if(!file) return
    setFileName(file.name)
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const json = XLSX.utils.sheet_to_json(sheet, {header:1})
    // naive: assume first column is labels, second column is values
    const labels = json.slice(1).map(r=>r[0])
    const values = json.slice(1).map(r=>r[1])
    setChartData({ labels, datasets:[{ label: 'Series', data: values, tension:0.4, fill:true, backgroundColor:'rgba(124,58,237,0.25)', borderColor:'rgba(124,58,237,1)' }] })
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white p-8'>
      <header className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>Your Saved Charts</h2>
        <div>
          <input type='file' accept='.xlsx,.xls' onChange={handleFile} />
        </div>
      </header>

      <section className='bg-gray-800 p-6 rounded-xl'>
        {chartData ? (
          <>
            <h3 className='mb-4'>Preview: {fileName}</h3>
            <div className='bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-lg'>
              <Line data={chartData} />
            </div>
          </>
        ) : <p>No file uploaded yet. Upload an Excel file to preview.</p>}
      </section>
    </div>
  )
}
