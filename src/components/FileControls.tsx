interface Props {
  onLoad: () => void
}

function FileControls({ onLoad }: Props){
  return(
    <div className="mb-6 space-x-4">
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onLoad}  
    >
        読み込み
    </button>
    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        書き出し
    </button>
    </div>
  )
}
export default FileControls;