<script setup>

const profile =
  [
    {
      title: '데뷔',
      content: `2020년 6월 30일
                미니 1집 We are
                데뷔일로부터 +491일째`
    },
    {
      title: '장르',
      content: '댄스, 퓨처 베이스, R&B'
    },
    {
      title: '리더',
      content: '이수진'
    },
    {
      title: '소속사',
      img: 'https://w.namu.la/s/7d36306a2571e6b24e97b8783de7f86cd83d69df44e5eb9020eaed48376b6432eb44dae00b8fc73890f33e6acc51f12e068a005a258ddb6324c6fb507adf1c47908cb1b349be3325c1e626962f9516bfb6e28634e6435f7d02fd60ed3832fcac'
    },
    {
      title: '유통사',
      img: 'https://w.namu.la/s/f5e46b377a4d14462bb42dab69de0836a68482277ccfe747f4e15c2db3ef4c5c6f78cabebce800da869595cacd330243eb9adb95402ebc9d6619bb3170917941445759f3a144918393d130294223bb5d5aa58f2015b9d8e3f0fa0f53debed2e6'
    },
    {
      title: '팬덤',
      img: 'https://w.namu.la/s/1ea4f8c5687089f13cad14958cbdc4088ec9d500b4c0048554c3f260a3ed48a49b6346391594ecf152b074830d195541c29d654c8be0130d4156e0c2276d6732157b728efde3e9b588d2a021d2ab0b808206a119b92d5a9d2b6675f3d925cd8b'
    },
    {
      title: '관련 링크',

    }
  ]
const memberProfile =
  [
    {
      name: '李受珍',
      birth: '2001. 12. 12. (19歲)',
      position: `<p>
                  <strong>리더</strong>
                </p>
                <p>
                  <strong>센터</strong>
                </p>
                <p>
                  <strong>메인댄서</strong>
                </p>서브보컬`,
      img: 'https://w.namu.la/s/5db369ce38cc9091102630d36b59d132110bf7ff6fd11f8287d7622b0968e20ac5d9b8cb3ad3c95e10783512c7e74aa8a95972b386c21e7722a90400706ab2e540679d262a4fd54fc088020ae34bbc3b4cbaecaa0ab65bc27b57522b1ecc29e9c2731c3ca93ba9540efb31ea72c95e25'
    },
    {
      name: '申智阭',
      birth: '2002. 03. 02. (19歲)',
      position: `<p>리드보컬</p>
                <p>리드댄서</p>
               <p>래퍼</p>`,
      img: 'https://w.namu.la/s/32ba23b1f31214d4c0686ab6c679fcd594ec3be448ec11d3b1dc3e655c5adb0e57a28522ab851f6d815f984819d0ecb4b07d101207ee23005af5b94d77a0d33937b60be72a9a5670a56716fbf5c83ad1cfd474e7f423a2b407745fc3adfb84639a7235dceebbe3b6e00bda4cc0e0875e'
    },
    {
      name: 'Monday',
      birth: '2002. 05. 10. (19歲)',
      position: `<p>
                  <strong>메인보컬</strong>
                </p>
                <p>
                  <strong>메인댄서</strong>
                </p>
                <p>
                래퍼
                </p>`,
      img: 'https://w.namu.la/s/c257247913cd4d82f683a854c4089eea4d3ccaabbd66b5405881aabe230cd67e135e20e3dbd8b72b6a16ce867a4b964a1acff00e3ced09a8ba0bef6ebc5e663e9dcc30d1516a5b7ecc43ab690a21e60cf46ce99a5232415180ef0566cc695d4b4d2fde4a9774d328071f83a08e26a5a6'
    },
    {
      name: '朴昭垠',
      birth: '2002. 10. 26. (19歲)',
      position: `<p>
                  <strong>메인댄서</strong>
                </p>
                리드보컬`,
      img: 'https://w.namu.la/s/a7a1c6048242bc5f959ff016fe10d149b6ec98956bb4549bb5d754835d59a04f58affe214c53262727c07ef1e2c5b97ed08b592d745bddcb47625ed20b7013d97d059a0af45694c11a7ea8dcdb67514a95518021c85a1307b2775838061e966db1ea596538ebc15b3170942d96ffa409'
    },
    {
      name: '李在希',
      birth: '2004. 03. 18. (17歲)',
      position: `<p>서브보컬</p>
                      래퍼`,
      img: 'https://w.namu.la/s/f063d1356e6edf95af9f9360b23e0fedbc63c867aae3d260d53a686a0f36651644effb8c521e5d6ecb8c2522a43aa7d6d2662983ec3b9cd97eb8dfd921b01f836a60188a70e3472e087d7dce7d59e036c0de46f32c80a5889da1c1239ed1dafd2c2d73e957a4b4e4e21d4cf720151658'
    },
    {
      name: '지한',
      birth: '2004. 07. 12. (17歲)',
      position: `<p>리드보컬</p>
                      리드댄서`,
      img: 'https://w.namu.la/s/891f1405f0472d973e7a7dd68e37a4d55b9e904e4f6e7c878f3fb94f1d144b27811caa061faedaca5a1f3840bd88b9d5e7aa8cee38381b03f1ef5ae7de5929d3ccb87c2fb12c85ed0ceb197db9bc343a27b0607630d57fc51a3298e72b9fbededa50a812a5b2c817ccac9b664fbc41d6'
    },
    {
      name: 'Zoa',
      birth: '2005. 05. 31. (16歲)',
      position: `<p>서브보컬</p>
                      래퍼`,
      img: 'https://w.namu.la/s/e30eb453f56e30012e92384dc81cb214a4c9933ba1383f86e3333839cbb372d989fd75b272897e88d17e5a27407173466b76f9490909f1ed14f64de03ade5e79f4fa9905f7d918a9f9e0774e7b79816e53ebd25e96a62752c28cd2ef80c322e9f7b82c609db7314fa315528e31c5cc0b'
    }
  ]


</script>

<template>
  <div class="bg-gray-200">
    <div
      class="max-w-screen-xl bg-white border border-gray-300 px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 grid grid-flow-row auto-rows-max gap-y-6"
    >
      <!-- 團體照 -->
      <div
        class="card flex-initial shadow-sm bg-accent text-accent-content text-center mx-auto w-auto"
      >
        <figure>
          <img
            src="https://w.namu.la/s/07cda7afd02805b630f2cbe8825f57ca863f948af1916b831de8c47b4f9fb311968d2ac23ee7dcda8f047a0470bca48d7567f24f0e9f8d92969a23c44c6de492734bcd34ccddb93fd91587ea23ae8cdd557f607c2946dcab4c5f10d3de7e74c8506c8dcb6d3d14595f2655ba9b59fb56"
          />
        </figure>
        <div class="card-body bg-green-100">
          <h2 class="card-title">Weeekly 4th Mini Album</h2>
          <p>Play Game : Holiday</p>
        </div>
      </div>
      <!-- 目錄與簡介 -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-content-between">
        <!-- 目錄 -->
        <div class="border border-gray p-4">
          <span class="text-bold">目錄</span>
          <div class="pt-3 flex flex-col">
            <span>
              <a href="#s-1">1</a>
              . 概要
            </span>
            <span>
              <a href="#s-2">2</a>
              . 成員
            </span>
            <span class="pl-6">
              <a href="#s-2.1">2.1</a>
              . 成員間的CP
            </span>
            <span>
              <a href="#s-3">3</a>
              . 外貌
            </span>
            <span>
              <a href="#s-4">4</a>
              . 世界觀
            </span>
            <span>
              <a href="#s-5">5</a>
              . 專輯列表
            </span>
            <span>
              <a href="#s-6">6</a>
              . MV
            </span>
            <span>
              <a href="#s-7">7</a>
              . 活動
            </span>
            <span class="pl-6">
              <a href="#s-7.1">7.1</a>
              . V LIVE
            </span>
            <span class="pl-6">
              <a href="#s-7.2">7.2</a>
              . 廣告及畫報
            </span>
            <span class="pl-12">
              <a href="#s-7.2.1">7.2.1</a>
              . 廣告
            </span>
            <span>
              <a href="#s-8">8</a>
              . 獲獎經歷
            </span>
            <span class="pl-6">
              <a href="#s-8.1">8.1</a>
              . 頒獎典禮
            </span>
            <span>
              <a href="#s-9">9</a>
              . 粉絲
            </span>
            <span>
              <a href="#s-10">10</a>
              . 應援法
            </span>
            <span>
              <a href="#s-11">11</a>
              . 閒談
            </span>
          </div>
        </div>
        <!-- 簡介 -->
        <div class="grid grid-flow-row border-2 border-blue-100 divide-y">
          <!-- logo -->
          <div class="grid grid-cols-3 gap-2 grid-flow-col divide-x m-3">
            <div class="col-span-2 grid place-items-center">
              <img
                src="https://w.namu.la/s/e8736bf4aae183c0b7245027c772885cec7d78f1fc9ff2ffdefb3c01ac8a4b9b41e5dc7900dfbbc5bce38f9f3120ad7892f6cc1fdb0416c3e9304ac2e732d757ca2ebac2dea411f175c6503cf1170ace25487d77c348cd8d1150103954945094a68c7a24da835eb990271380e9f1e3fe"
                class="w-3/5"
              />
            </div>
            <div>
              <div class="mt-3">
                <span class="pl-2 text-xl font-bold text-blue-100">
                  We
                  <span class="text-red-500 ml-[-4px]">e</span>ekly
                </span>
                <p class="pl-2 text-blue-100">위클리</p>
              </div>
            </div>
          </div>
          <!-- logo -->
          <!-- 資訊 -->
          <div
            v-for="(value, key, index) in profile"
            :key="profile.index"
            class="grid grid-cols-3 grid-flow-col grid-flow-row"
          >
            <div
              class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center"
            >{{ value.title }}</div>
            <div class="col-span-2 grid place-items-center">
              <p class="pl-2 text-blue-100">{{ value.content }}</p>
              <img class="w-1/4" :src="value.img" />
            </div>
          </div>
          <!-- 資訊 -->
        </div>
      </div>
      <!-- collapse -->
      <!-- 1. 概要 -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-1">1. 概要</div>
        <div class="collapse-content">
          <div class="w-1/2 mx-auto">
            <!-- poster="/skins/senkawa/eff02a509fa92bb835d8902dd4b5b760.gif" -->
            <video
              src="https://ww.namu.la/s/6d513337a702662bf9ca2dd3da278269239efbe6e83b391d9c60c3ea3dcb1bdb7fb822312f464f31f6fadfb059c8cba55e9f10dd73a09f827e62993cc2188aaa99d4d577e31ff9a535390c36a479453edadfeff12170c9bd89999f9e6d0b0cab"
              loop
              autoplay
              muted
              playsinline
              loading="lazy"
            ></video>
          </div>
          <div
            class="border-dashed border-2 border-gray-400 bg-white text-center m-5 p-1 w-1/2 mx-auto"
          >인사드리겠습니다! 本周是Weeekly! 大家好, 我們是Weeekly!</div>
          <div
            class="border-dashed border-2 border-gray-400 bg-white text-center m-5 p-1 w-1/3 mx-auto"
          >Can we do? We can do! Weeekly!</div>

          <div>
            <strong>Weeekly(위클리)</strong>는 플레이엠엔터테인먼트 소속 7인조 걸그룹이며,
            <strong>매일 새롭고 특별한 일주일을 선사한다</strong>는 캐치프레이즈답게 멤버들이 요일을 하나씩 담당하고 있다.
          </div>
        </div>
      </div>
      <!-- 2. 成員 -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-2">2. 成員</div>
        <div class="collapse-content">
          <div
            class="border-2 border-blue-100 grid grid-cols-2 md:grid-cols-4 bg-white text-center max-w-5xl mx-auto"
          >
            <div
              v-for="(value, key, index) in memberProfile"
              :key="memberProfile.index"
              class="grid grid-flow-row auto-rows-max border divide-y divide-slate-300"
            >
              <div class="w-full">
                <img class="w-full" :src="value.img" />
              </div>
              <div
                class="bg-blue-100 text-white font-bold grid place-items-center p-1"
              >{{ value.name }}</div>
              <div class="p-1">{{ value.birth }}</div>
              <div class="p-1" v-html="value.position"></div>
            </div>
            <div class="my-auto">
              <div class="w-full">
                <img
                  src="https://w.namu.la/s/1c26fee5598c453828e3ffe98c6c89e06ec73f2d1eb99fe3afecbe29185624233dbf235dc060c371e8a64945b1ad75722d45cf24490330207851085db2de9192ac6690312354d85aa96cbff7fb0c97d81b92a03703999443eda3bb1b2a97b658228c73d8f417ee351f3e422024334317"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2.1. 成員間的CP -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-2.1">2.1. 成員間的CP</div>
        <div class="collapse-content">
          <div class="mx-5">
            <ul class="list-disc leading-10">
              <li>
                <strong class="text-red-500">페이브걸즈</strong> - 李受珍, 申智阭, Monday, 朴昭垠, 李在希
              </li>
              <li>
                <strong class="text-blue-800">공이(02)즈/ 올라운더즈</strong> - 申智阭, Monday, 朴昭垠
              </li>
              <li>
                <strong class="text-red-500">공사(04)즈/ 공사장</strong> - 李在希, 지한
              </li>
              <li>
                <strong class="text-blue-800">3월즈</strong> - 申智阭, 李在希
              </li>
              <li>
                <strong class="text-red-500">5월즈/ 월요일 Zoa/ 스폰지밥</strong> - Monday, Zoa
              </li>
              <li>
                <strong class="text-blue-800">맏막즈/ 리막즈/ Zoa진/ 과수원</strong> - 李受珍, Zoa
              </li>
              <li>
                <strong class="text-red-500">언니즈/ 성인즈/ 언니라인</strong> - 李受珍, 申智阭, Monday, 朴昭垠
              </li>
              <li>
                <strong class="text-blue-800">동생즈/ 막내(동생)라인/ 외동즈/ 학생라인/ 산리오 / 뽀송즈</strong> - 李在希, 지한, Zoa
              </li>
              <li>
                <strong class="text-red-500">주말즈/ 이씨즈/ 이이즈/ 케챱즈/ 유일무이즈</strong> - 李受珍, 李在希
              </li>
              <li>
                <strong class="text-blue-800">평일즈</strong> - 申智阭, Monday, 朴昭垠, 지한, Zoa
              </li>
              <li>
                <strong class="text-red-500">강토즈/ A형즈</strong> - 李受珍, 지한
              </li>
              <li>
                <strong class="text-blue-800">행복해지소/ 빌런즈/ 긍굥쌤</strong> - 申智阭, 朴昭垠
              </li>
              <li>
                <strong class="text-red-500">믹나즈</strong> - 李受珍, 申智阭, 朴昭垠
              </li>
              <li>
                <strong class="text-blue-800">젤리데이/ 룸메즈</strong> - 李在希, Monday
              </li>
              <li>
                <strong class="text-red-500">쏭아지</strong> - 朴昭垠, Zoa, 申智阭
              </li>
              <li>
                <strong class="text-blue-800">수소즈/ 연습생장기라인즈</strong> - 李受珍, 朴昭垠
              </li>
              <li>
                <strong class="text-red-500">사랑둥이즈/ ENFJ즈</strong> - 李在希, Zoa
              </li>
              <li>
                <strong class="text-blue-800">짠소금/ 화목즈/ 주토피아즈</strong> - 朴昭垠, 지한
              </li>
              <li>
                <strong class="text-red-500">찰떡즈</strong> - 申智阭, Zoa
              </li>
              <li>
                <strong class="text-blue-800">진지즈/ 식빵즈/ 수지즈</strong> - 李受珍, 申智阭
              </li>
              <li>
                <strong class="text-red-500">설탕즈</strong> - 李受珍, 지한, Zoa
              </li>
              <li>
                <strong class="text-blue-800">메댄즈</strong> - 李受珍, Monday, 朴昭垠
              </li>
              <li>
                <strong class="text-red-500">삼백안즈</strong> - 李受珍,Monday,Zoa
              </li>
              <li>
                <strong class="text-blue-800">지방즈</strong> - Monday, 朴昭垠
              </li>
              <li>
                <strong class="text-red-500">장신즈</strong> - Monday, 朴昭垠, Zoa
              </li>
              <li>
                <strong class="text-blue-800">단신즈/ 쪼꼬미즈/ 평균즈</strong> - 李受珍, 李在希, 申智阭, 지한
              </li>
              <li>
                <strong class="text-red-500">일월즈/ 톰과제리즈</strong> - 李受珍, Monday
              </li>
              <li>
                <strong class="text-blue-800">예명즈</strong> - 지한, Monday, Zoa
              </li>
              <li>
                <strong class="text-red-500">본명즈</strong> - 李受珍, 李在希, 申智阭, 朴昭垠
              </li>
              <li>
                <strong class="text-blue-800">화채즈</strong> - 李受珍, 朴昭垠, 지한
              </li>
              <li>
                <strong class="text-red-500">태극즈</strong> - 朴昭垠, Zoa
              </li>
              <li>
                <strong class="text-blue-800">B형즈</strong> - 申智阭, Monday, 朴昭垠, 李在希
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 3. 外貌 -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-3">3. 外貌</div>
        <div class="collapse-content">
          <div class="mx-5">
            <ul class="list-disc">
              <li>멤버 개개인의 외모가 개성있고 예쁘다. 또한 평균 키가 매우 크다.</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 4. 世界觀 -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-4">4. 世界觀</div>
        <div class="collapse-content">
          <div class="mx-5">
            <ul class="list-disc">
              <li class="pb-4">
                Weeekly依照成員們個別的teaser就具有獨立的世界觀。
                成員們擔當的星期設定(一~日)和象徵天體透過官咖創造神‘D🪐NA(도나)’逐漸向粉絲滿足了對世界觀的好奇心。
              </li>
              <li class="pb-4">
                Jihan的teaser影片《A MESSAGE FROM MARS》中，
                因為Jihan是火星的星主，所以可以從火星向其他成員發送訊息。
                剩下的成員們是受珍-太陽、Monday-月亮、智阭-水星、昭垠-木星、Zoa-金星、在希-土星。
                這邊要注意的一點是，Monday是"月"，與在地球身邊旋轉與其他成員不同。
              </li>
              <li>除此之外世界觀的核心內容如下:</li>
              <div class="pl-8 pb-4">
                <li>成員們已失去了記憶。</li>
                <li>Weeekly成員們為何來到地球呢?</li>
                <li>
                  帶有許多好奇心的月球星主Monday喜歡觀察地球。
                  某一天，發現地球出現問題後向掌管太陽系的受珍報告了這一消息。
                </li>
                <li>
                  從Universe的舞台來看，有著成員們以太陽星主受珍為中心旋 轉的舞蹈。
                  這是以太陽系的移動和行星們的公轉/自轉的模樣來比喻成旋轉木馬。
                </li>
                <li>地球上生活著Daileee和Weeekly，為何地球上的最後一名少女成為了水星主智阭呢?</li>
              </div>
              <li
                class="pb-4"
              >在Zig Zag MV和After School的MV中持續出現的貓和蝸牛代表著重要作用，其中貓的名字在After School的showcase中被確認是Uni。</li>
              <li class="pb-4">
                We Play 第四首歌曲《Uni》是MV中的貓咪，從歌曲的歌詞來看，
                給人一種jump truck載著成員們奔跑的印象。
                從Zig Zag MV中，貓咪背上揹著成員們生活著的學校來看，
                可以推測Uni的角色可能是載成員們回到原本行星當星主。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 5. 專輯列表 -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-5">5. 專輯列表</div>
        <div class="collapse-content">
          <div class="mx-5 flex items-center">
            <div class="w-5">
              <img
                src="https://w.namu.la/s/136d6ab3623ef095880975b698cd27aebf6887c9d8eb7f5f72caa1e1e98b8b76a24e2bf57507f45c49090ad8e0c386938300d673e7083183fa216006e2a8a6d972113ec3533215f83889d34cd94d2e24ce46fb8de939ea72c1ab94f36db9336680495f48a35af0bee0cd5da801b59091"
                alt
              />
            </div>
            <span class="ml-3">
              자세한 내용은
              <a
                href="https://namu.wiki/w/Weeekly/%EC%9D%8C%EB%B0%98%20%EB%AA%A9%EB%A1%9D"
              >Weeekly/음반 목록</a> 문서를 참고하십시오.
            </span>
          </div>
        </div>
      </div>
      <!-- 6. MV -->
      <div class="collapse w-full collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-extrabold" id="s-6">6. MV</div>
        <div class="collapse-content">
          <div class="mx-5 gird">
            <div class="flex items-center pb-4">
              <div class="w-5">
                <img
                  src="https://w.namu.la/s/136d6ab3623ef095880975b698cd27aebf6887c9d8eb7f5f72caa1e1e98b8b76a24e2bf57507f45c49090ad8e0c386938300d673e7083183fa216006e2a8a6d972113ec3533215f83889d34cd94d2e24ce46fb8de939ea72c1ab94f36db9336680495f48a35af0bee0cd5da801b59091"
                  alt
                />
              </div>
              <span class="ml-3">
                <a
                  href="https://www.kpop-radar.com/Weeekly"
                  class="no-underline hover:underline ..."
                >위클리(Weeekly) 실시간 뮤직비디오 조회수 추이</a>
              </span>
            </div>

            <!-- table -->
            <div class="text-center grid divide-x-1 border-2 border-blue-100 divide-white">
              <table class="table-auto border-collapse w-full">
                <thead>
                  <span class="bg-blue-100 text-white font-semibold">
                    <p class="mt-1">Weeekly MV Youtube 조회수</p>
                    <p class="mb-1">(2021년 08월 19일 PM 7:40 KST 기준)</p>
                  </span>
                </thead>
                <tbody class="bg-white">
                  <tr class="bg-blue-100 text-white font-semibold">
                    <td class="border border-gray-200">순위</td>
                    <td class="border border-gray-200">곡명</td>
                    <td class="border border-gray-200">조회수</td>
                    <td class="border border-gray-200">발표일</td>
                    <td class="border border-gray-200">앨범명</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 font-semibold">01</td>
                    <td class="border border-gray-200 hover:underline">
                      <a href="https://youtu.be/qfVuRQX0ydQ">After School</a>
                    </td>
                    <td class="border border-gray-200 font-semibold">100,139,378</td>
                    <td class="border border-gray-200">2021년 03월 17일</td>
                    <td class="border border-gray-200">We play</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 font-semibold">02</td>
                    <td class="border border-gray-200 hover:underline">
                      <a href="https://youtu.be/DZEOt4pQXXk">Holiday Party</a>
                    </td>
                    <td class="border border-gray-200 font-semibold">21,469,801</td>
                    <td class="border border-gray-200">2021년 08월 04일</td>
                    <td class="border border-gray-200">Play Game : Holiday</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 font-semibold">03</td>
                    <td class="border border-gray-200 hover:underline">
                      <a href="https://youtu.be/Moq0aOiTUOA">Tag Me</a>
                    </td>
                    <td class="border border-gray-200 font-semibold">17,823,333</td>
                    <td class="border border-gray-200">2020년 06월 30일</td>
                    <td class="border border-gray-200">We are</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 font-semibold">04</td>
                    <td class="border border-gray-200 hover:underline">
                      <a href="https://youtu.be/1FqAoADnId4">Zig Zag</a>
                    </td>
                    <td class="border border-gray-200 font-semibold">16,711,007</td>
                    <td class="border border-gray-200">2020년 10월 13일</td>
                    <td class="border border-gray-200">We can</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="mt-4"
            >틱톡 챌린지 및 해외 팬들이 유입되면서 After School의 조회수 증가량 추이가 급격히 상승하는 중이다. 2021년 9월 20일 조회수 1억을 돌파했다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
