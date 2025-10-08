import FileControls from './components/FileControls'
import SearchControls from './components/SearchControls'
import ResumeList from './components/ResumeList'

function App(){
  return(
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">職務経歴Viewer</h1>
      <p className="mb-6 text-sm text-gray-600">
        職務経歴を読み込み、書き出しができます。読み込んだ職務経歴を絞り込んで確認することができます。
        データはサーバーに保存されず、ローカルで処理されます。
      </p>
      <FileControls />
      <SearchControls />
      <ResumeList />
    </div>
  )
}
export default App;