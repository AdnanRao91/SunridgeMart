import Image from "next/image"

export default function DownloadApplication(){
    return(
        <>
        <div className="download-application relative mb-12">
          <div className="bg-application">
            <img src="/assets/home/bread_1.png" className="lg:w-11/12 sm:w-2/4" />
          </div>
            <div className="lg:container lg:mx-auto">
              <div className="grid lg:grid-cols-12 sm:grid-cols-1 sm:flex xs:flex" style={{alignItems: "end"}}>
                <div className="col-span-8">
                    <div className="f-60 nova-bold text-light-black lh-1 lg:ms-80 sm:mx-8 xs:mx-8 sm:pt-20 xs:py-4 uppercase">
                        Dowload Our
                        <div className="text-color-orange txt-font-extraBold">
                        Application 
                        Now!
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <div className="icon-apple">
                            <div className="icon-bg">
                                <Image src="/assets/home/playstore.png" width={25} height={25} alt="play store"/>
                            </div>
                        </div>
                        <div className="icon-apple">
                            <div className="icon-bg">
                                <Image src="/assets/home/apple.png" width={25} height={25} alt="apple"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4" style={{marginTop: '-80px'}}>
                    <img src="/assets/home/hand-smatphone.png" />
                </div>
              </div>
             
            </div>
        </div>
        </>
    )
}