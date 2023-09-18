import { View, Text } from "@tarojs/components";
import React, { useState, useRef } from "react";
import { NavBar, Tabs, Swiper } from "@nutui/nutui-react-taro";
import { Left, Share, Close } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import Hot from "./hot";
import New from "./new";
import { AtButton } from "taro-ui";
const App = () => {
  const swiperRef = useRef(null);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Tabs
        align="left"
        value={tabIndex}
        height={20}
        onChange={page => {
          swiperRef.current?.to(page);
          setTabIndex(page);
        }}
      >
        <Tabs.TabPane title="热门" />
        <Tabs.TabPane title="精选" />
        <Tabs.TabPane title="最新" />
      </Tabs>
      <Swiper
        height={1500}
        initPage={0}
        loop={false}
        ref={swiperRef}
        onChange={page => {
          setTabIndex(page.detail.current);
        }}
      >
        <Swiper.Item>
          <Hot />
        </Swiper.Item>
        <Swiper.Item>
          <New />
        </Swiper.Item>
        <Swiper.Item>
          <div style={{ padding: "10px" }}>Tab 3</div>
        </Swiper.Item>
      </Swiper>
    </>
  );
};
export default App;
