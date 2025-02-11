const DisputesPage = () => {
    return (
        <div>
            <p className={`${inter.className} text-[24px] text-[#002269] leading-6 my-[30px]`}>Споры по сделкам</p>

            <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] p-[13px_20px_15px]">
                <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>СПОРНЫЕ СДЕЛКИ</p>
                <p className={`font-sans text-[rgb(0 34 105)] text-[20px] font-semibold mb-7`}>0 USDT</p>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB – 0 спорных сделок</p>
           </div>

           <div className="flex flex-col gap-2">
      <label className="text-gray-500 text-sm">Поиск по спорам</label>
      <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-72 bg-white shadow-sm">
        <CiSearch className="w-5 h-5 text-blue-500" />
        <input
          type="text"
          placeholder="Поиск по спорам"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-2 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        {query && (
          <X
            className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={() => setQuery("")}
          />
        )}
      </div>
    </div>
        </div>
    )
}

export default DisputesPage