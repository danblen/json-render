// import { useTextSelection } from "@reactuses/core";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import React, { useState, useEffect, useCallback } from "react";
import { data } from "./const";

export default () => {
  return (
    <View className="flex">
      <View className="w-1/2 p-4">
        {data.map(src => (
          <Image className="w100 h100" src={src}></Image>
        ))}
      </View>

      <View className="w-1/2 p-4">
        {data.map(src => (
          <Image className="w100 h100" src={src}></Image>
        ))}
      </View>
    </View>
  );
};
