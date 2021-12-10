<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="bg-gray-200">
    <div
      class="max-w-screen-xl bg-white border border-gray-300 px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 grid grid-flow-row auto-rows-max gap-y-6"
    >
      <!-- 目錄與簡介 -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-content-between gap-y-3">
        <!-- 目錄 -->
        <div class="border border-gray-300 p-4 max-w-max h-fit order-last md:order-1">
          <span class="font-semibold text-xl">{{ t('home.Directory.directory') }}</span>
          <div class="pt-3 flex flex-col">
            <span>
              <a href="#s-1">1</a>
              . {{ t('home.Directory.summary') }}
            </span>
            <span>
              <a href="#s-2">2</a>
              . 데뷔 전
            </span>
            <span class="pl-6">
              <a href="#s-2.1">2.1</a>
              . 믹스나인
            </span>
            <span>
              <a href="#s-3">3</a>
              . 개인 활동
            </span>
            <span class="pl-6">
              <a href="#s-3.1">3.1</a>
              . 웹 콘텐츠
            </span>
            <span class="pl-6">
              <a href="#s-3.2">3.2</a>
              . 연기 활동
            </span>
            <span>
              <a href="#s-4">4</a>
              . 포지션
            </span>
            <span class="pl-6">
              <a href="#s-4.1">4.1</a>
              . 리더
            </span>
            <span class="pl-6">
              <a href="#s-4.2">4.2</a>
              . 서브보컬
            </span>
            <span class="pl-6">
              <a href="#s-4.3">4.3</a>
              . 메인댄서
            </span>
            <span>
              <a href="#s-5">5</a>
              . 캐릭터
            </span>
            <span class="pl-6">
              <a href="#s-5.1">5.1</a>
              . 성격
            </span>
            <span class="pl-6">
              <a href="#s-5.2">5.2</a>
              . 취향
            </span>
            <span class="pl-6">
              <a href="#s-5.3">5.3</a>
              . 특기
            </span>
            <span class="pl-6">
              <a href="#s-5.4">5.4</a>
              . 비주얼
            </span>
            <span>
              <a href="#s-6">6</a>
              . 여담
            </span>
            <span>
              <a href="#s-7">7</a>
              . 역대 프로필 사진
            </span>
          </div>
        </div>
        <!-- 簡介 -->
        <div class="grid grid-flow-row border-2 border-blue-100 divide-y leading-9 order-2">
          <div class="text-white font-bold bg-blue-100 text-center">
            <div class="my-2">
              <p>이수진</p>
              <p>LEE SOO JIN</p>
            </div>
          </div>
          <!-- 照片 -->
          <div class="grid gap-2 grid-flow-col">
            <div class="col-span-2 grid place-items-center">
              <img src="@/assets/images/Soojin.jpg" class="w-full" />
            </div>
          </div>
          <!-- 資訊 -->
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row text-center">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">이름</div>
            <div class="col-span-3 grid place-items-center">
              <div class="pl-2">
                <p>이수진 (李受珍, Lee Soojin)</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">출생</div>
            <div class="col-span-3 grid place-items-center">
              <p class="pl-2">2001년 12월 12일 (19세)</p>
              <p>서울특별시 송파구</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">국적</div>
            <div class="col-span-3 grid place-items-center">
              <p>대한민국</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">신체</div>
            <div class="col-span-3 grid place-items-center">
              <p>165.5cm, A형, 245mm</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">가족</div>
            <div class="col-span-3 grid place-items-center">
              <p>부모님, 언니</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">학력</div>
            <div class="col-span-3 grid place-items-center">
              <p>서울잠실초등학교 (졸업)</p>
              <p>잠실중학교 (졸업)</p>
              <p>영파여자고등학교 (졸업)</p>
              <p>동국대학교 심벌마크 동국대학교 (연극학부 / 재학)</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">소속사</div>
            <div class="col-span-3 flex items-center justify-center">
              <img class="w-1/3 m-3" src="@/assets/images/IST.png" />
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">소속 그룹</div>
            <div class="col-span-3 flex items-center justify-center">
              <img class="w-1/3 m-2" src="@/assets/images/weeekly.png" />
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">포지션</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>리더, 센터, 메인댄서, 서브보컬</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>2020년 Weeekly 미니 1집 We are</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">연습 기간</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>4년 2개월</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">좌우명</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>후회하지 않을 선택을 하자!!</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">MBTI</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>ISTJ / ESTJ</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">별명</div>
            <div class="col-span-3 flex items-center justify-center">
              <p>대장, 대장강아지, 뚜뭉이 대장토끼, 수르륵, 뚜, 뚜디니, 잠실여신, 심청이</p>
            </div>
          </div>
          <div class="grid grid-cols-4 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">서명</div>
            <div class="col-span-3 flex items-center justify-center">
              <img class="w-1/5 m-1" src="@/assets/images/受珍簽名.jpg" />
            </div>
          </div>
        </div>
      </div>
      <!-- 資訊 -->
      <div class="w-full mx-auto">
        <details
          id="s-1"
          class="bg-white ring-1 ring-black/5 shadow-md shadow-blue-100/30 p-6 rounded-sm"
          open
        >
          <summary
            class="text-sm leading-6 text-gray-900 font-semibold select-none cursor-pointer"
          >1. 개요</summary>
          <div class="mt-3 text-sm leading-6 text-gray-600">
            <p>2020년 6월 30일에 데뷔한 IST엔터테인먼트 소속 7인조 걸그룹 Weeekly의 멤버이다.</p>
          </div>
        </details>
        <br />
        <details
          class="bg-white ring-1 ring-black/5 shadow-md shadow-blue-100/30 p-6 rounded-sm"
          open
        >
          <summary
            class="text-sm leading-6 text-gray-900 font-semibold select-none cursor-pointer"
          >2. 데뷔 전</summary>
          <div class="mt-3 text-sm leading-6 text-gray-600">
            <p></p>
          </div>
        </details>
        <details
          class="bg-white ring-1 ring-black/5 shadow-md shadow-blue-100/30 p-6 rounded-sm"
          open
        >
          <summary
            class="text-sm leading-6 text-gray-900 font-semibold select-none cursor-pointer"
          >2.1. 믹스나인</summary>
          <div class="mt-3 text-sm leading-6 text-gray-600">
            <p>자세한 내용은 이수진(Weeekly)/믹스나인 문서를 참고하십시오.</p>
          </div>
        </details>
        <br />
        <details
          class="bg-white ring-1 ring-black/5 shadow-md shadow-blue-100/30 p-6 rounded-sm"
          open
        >
          <summary
            class="text-sm leading-6 text-gray-900 font-semibold select-none cursor-pointer"
          >3. 개인 활동</summary>
          <div class="mt-3 text-sm leading-6 text-gray-600">
            <p>자세한 내용은 이수진(Weeekly)/믹스나인 문서를 참고하십시오.</p>
          </div>
        </details>
        <br />
      </div>
    </div>
  </div>
</template>
