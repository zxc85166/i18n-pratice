<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const profile =
  [
    {
      title: '장르',
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
      content: '李受珍'
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
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <!-- 目錄與簡介 -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-content-between">
        <!-- 目錄 -->
        <div class="border border-gray p-4">
          <span class="text-bold">目錄</span>
          <div class="pt-3 flex flex-col">
            <span>
              <a href="#s-1">1</a>
              . {{ t('home.Directory.summary') }}
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
          <div class="text-white font-bold bg-blue-100 text-center">
            <div class="my-2">
              <p>이수진</p>
              <p>LEE SOO JIN</p>
            </div>
          </div>
          <!-- 照片 -->
          <div class="grid gap-2 grid-flow-col">
            <div class="col-span-2 grid place-items-center">
              <img
                src="https://w.namu.la/s/37c77f7672813b8d9b470b54825673af5dbd950b05c4b777dfb3f1e9fd4ef47648bdcc55cbc5e6d553dc15590371696a7e8f6e315ab1428ba51b7bd1549f4b008d3c28d97ba8cdec1177eb785ef484336250b98b0a41611079da017fa480713b443aaf7237630b2a31445a420d7b22bd"
                class="w-full"
              />
            </div>
          </div>
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
    </div>
  </div>
</template>
