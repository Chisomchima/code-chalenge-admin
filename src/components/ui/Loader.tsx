import React from 'react'
import { DotLoader } from 'react-spinners'

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100" style={{ backgroundColor: "#F2E3FF", opacity: 0.75 }}>
      <DotLoader color="#a238ff" size={60} />
    </div>
  )
}

export default Loader