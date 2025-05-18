"use client";

import { useState } from "react";

export default function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="flex container mx-auto p-5 flex-col md:flex-row items-center"> 
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Shun Kojima</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
            <a href="#About" className="mr-5 hover:text-blue-400 duration-300">About</a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
           
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 pr-24 
           mb:pr-16 text-center md:text-left">
              <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
                こんにちは！
                <br />
                私の名前はシオン（仮）です。
                <br />
                フロントエンドエンジニアを目指しています。
              </h1>
              <p className="mb-8 leading-relaxed">文学部英米文学科出身ですが、フロントエンジニア 
                 を仕事にしたいため、このポートフォリオを作成し 
                 ました。
              </p>
              <a href="https://www.instagram.com/shun_10.ponta/">
              <button className="text-white bg-green-500 
               py-2 px-6 border-0 rounded text-lg 
                hover:bg-green-600 duration-300">Contact </button>
              </a>  
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="Myphoto.JPEG" alt="" style={{
              width: "400px",  /* 横のサイズ */
              height: "600px" /* 縦のサイズ */
            }}/>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200" id="About" >
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">About Me</h1>
            <p>2003年10月12日生まれ　埼玉県出身　趣味はダンスとライブ鑑賞です。MBTIはINFPとINTPを行き来しています。   
            </p>
            <p className="pb-10">
              英語が中学生のころから好きで、大学では英米文学を専攻していました。大学では、英語の文法や文学を学びましたが、プログラミングに興味を持ち、独学で学び始めました。特にフロントエンド開発に興味があります。ReactやNext.jsを使った開発に取り組んでいます。最近はUnityを触りはじめ、アセットを使ったゲームづくりにも取り組んでいます。将来的には、フロントエンドエンジニアとして、ユーザーにとって使いやすいアプリケーションを作りたいと思っています。
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap" >
            <div className="md:w-1/3 mb-3 p-3">
              <div className="bg-gray-100 rounded-lg p-8"> 
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg"   width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h2 className="text-gray-900 text-lg  font-medium ml-2">
                  Web Deveoloper
                </h2>
              </div>
              <div>
                <p>
                  フレームワークはNext.jsを使用しています。Reactのコンポーネントを使って、効率的な開発を行っています。CSSはTailwind CSSを使用して、デザインを整えています。最近は、TypeScriptにも挑戦しています。
                </p>
               
              </div>
              </div>
            </div>
            <div className="md:w-1/3 mb-3 p-3">
              <div className="bg-gray-100 rounded-lg p-8"> 
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg"   width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h2 className="text-gray-900 text-lg  font-medium ml-2">
                 dance
                </h2>
              </div>
              <div>
                <p>
                 メインのジャンルはヒップホップです。ダンス暦はおよそ一年半で、脱初心者が今の目標です。
                </p>
              </div>
              </div>
            </div> 
            <div className="md:w-1/3 mb-3 p-3">
              <div className="bg-gray-100 rounded-lg p-8"> 
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg"   width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h2 className="text-gray-900 text-lg  font-medium ml-2">
                  game
                </h2>
              </div>
              <div>
                <p>
                  一番好きなゲームはマリオカートです。DS、Wii、3DS、Swichでプレイしてきました。好きなコースはレインボーロードです。
                </p>
              </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      <section className="text-gray-700 border-t border-gray-200" >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:mb-0 mb-10 w-fulll lg:w-1/2 flex justify-center" id="Skills">
            {/* left side */} 
            <img src="pokemon.jpg" alt="" className="rounded"/>
          </div>
         {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2 pt-4 ">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">My Skills</h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"70%"}} >70%</div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"60%"}} >60%</div>
              </div><h2>javascript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"50%"}} >50%</div>
              </div><h2>typescript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"40%"}} >40%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
