import "../../index.css";


function Navbar() {
  return (
    <div className="w-[100%] h-[91px] pl-[50px] border-t flex justify-between items-center">
      <div className="w-[343px] h-[44px] p-[10px]">
        <label className="relative block">
          <span className="sr-only">Busca</span>
          <span className="absolute inset-y-0 right-1 flex items-center pl-2">
            <img src="src\Components\Navigation\assets\icon\Frame9.svg" alt="" />
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Busca" type="text" name="search"  style={{ backgroundColor: 'rgba(250, 250, 250, 1)' }}/>
        </label>
      </div>
      <div className="w-[364px] pt-[24px] pl-[50px] gap-[30px]">
        <div className="flex flex-row gap-[30px]">
          <img src="src\Components\Navigation\assets\icon\ic_round-notifications.svg" alt="" />
          <img src="src\Components\Navigation\assets\icon\bi_chat-left-dots-fill.svg" alt="" />
          <div className="flex items-center gap-[12px]">
            <img src="https://s3-alpha-sig.figma.com/img/f3a4/8287/6bf054911a8a1a4cc29afafa2bd70fe8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOl4z0fxw~OwZCQU94aZ~5HM7cqoMk1SKjh6zGxUrC~Mes4wQsf2l~J2qNnJSnYb-kytbm986mV4fcM7CJZzmM8NkYSj4Rcp5ELQ3~3Tuq1JoGkHr0aRAruWBbFpAOo43kzNPGLIQyn2MibbSsn7gZPNGOTp8232GniR7TtDlwtGbZLHzZkbvXJd1FuzdIdTrZjGNBU5RhPM47maLQOMH1vVgOTqggbhuJPFREGD9TGFIDGizSYvtv9FZ594WfKvZmmLwwQ8CWQMh8~ofHHyLSGJ~obKiZdKzRS3C8PMAECdGup1OAz3occmVNPa3qyU55119AlBzpUVn9DRBTUkkw__" className="w-[42px] h-[42px] ml-[-1px] rounded-full"/>
            <p className="font-poppins font-medium text-base" style={{ color: 'rgba(22, 30, 84, 1)', fontSize: '16px', alignItems: 'center' }}>Iago Maciel</p>
            <img src="src\Components\Navigation\assets\icon\Frame10.svg" alt="" />
          </div>
        </div>
        
      </div>      
    </div>
  );
}

export default Navbar;
