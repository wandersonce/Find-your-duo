interface GameBannerProps{
  indexMap: number;
  bannerUrl: string;
  title: string;
  adsCount: number;
}


function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className={`keen-slider__slide number-slide${props.indexMap} relative rounded-lg overflow-hidden`}>
    <img src={props.bannerUrl} alt={props.title} />

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
      <strong className='font-bold text-white block '>{props.title}</strong>
      <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} Post(s)</span>
    </div>
  </a>
  )
}

export default GameBanner