interface Props {
  query:string
  onChange: (value: string)=> void
}

function SearchControls({query, onChange}:Props){
  return(
    <div className="mb-6">
      <input
        type="text"
        placeholder="キーワードで検索"
        className="p-2 border border-gray-300 rounded w-full"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
export default SearchControls;