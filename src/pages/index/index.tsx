import { Component, PropsWithChildren } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
// @import "~taro-ui/dist/style/components/button.scss";
import { AtSearchBar, AtGrid, AtButton, AtCountdown, AtDivider, AtCard } from 'taro-ui'

import './index.scss'
import hdbg from '../../images/hdbg.png'
import testImages from '../../images/img_137.png'
import sw01bg from '../../images/位图.png'

function Index() {


  return (
    <>
      <View className='header'>
        <Image className='img' src={hdbg} mode='widthFix'></Image>
        <View className='header-content'>
          <View className='title'>房生活</View>
          <AtSearchBar value='1'
            onChange={() => { }}
          ></AtSearchBar>
        </View>
      </View>
      <View className='swiper-container'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem><View className='demo-text-1'>
            <Image src={testImages}></Image>
          </View></SwiperItem >
          <SwiperItem><View className='demo-text-1'>1</View></SwiperItem >
          <SwiperItem><View className='demo-text-1'>1</View></SwiperItem >
          <SwiperItem><View className='demo-text-1'>1</View></SwiperItem >
        </Swiper>
      </View>
      <View className='funList'>

        <AtGrid columnNum={5} hasBorder={false} data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '找折扣'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            }
          ]
        }
        />
      </View>

      <View className='swiper01'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          previousMargin="16px"
          nextMargin="12px"
          displayMultipleItems={1.25}
        >
          <SwiperItem>
            <View className='demo-text-1'>
              <Image src={sw01bg} ></Image>
              <View>
                <Text>成都爆火楼盘2W人登记</Text>
                <Text>开发商宣讲</Text>
              </View>
            </View>
          </SwiperItem >
          <SwiperItem>
            <View className='demo-text-1'>
              <Image src={sw01bg} ></Image>
              <View>
                <Text>成都爆火楼盘2W人登记</Text>
                <Text>开发商宣讲</Text>
              </View>
            </View>
          </SwiperItem >
        </Swiper>
      </View>

      <View className='rmht'>
        <h2>热门话题</h2>
        <Text>更多话题&gt;</Text>
      </View>

      {/*  */}
      <View className='rm'>
        <View className='rm-item'>
          <Image src={sw01bg} ></Image>
          <Text className='tag'>安静舒适</Text>
          <Text className='txt'>#居住新方式#</Text>
          <Text className='popple'>4188人</Text>
        </View>
        <View className='rm-item'>
          <Text className='tag'>安静舒适</Text>
          <Text className='txt'>#居住新方式#</Text>
          <Text className='popple'>4188人</Text>
        </View>
        <View className='rm-item'>
          <Text className='tag'>安静舒适</Text>
          <Text className='txt'>#居住新方式#</Text>
          <Text className='popple'>4188人</Text>
        </View>
      </View>

      {/*  */}
      <View className='qy'>
        <View className='left'>
          <Text>
            我的『房生活』权益
          </Text>
          <Text>
            快来领取您的专属房生活权益吧～
          </Text>
          <AtButton type='secondary' size='small' circle className='btn'>立即激活</AtButton>
        </View>
        <View className='right'>
          <View>
            <Text>添加我的住房</Text>
            <Image src={sw01bg} ></Image>

          </View>
          <View>
            <Text>添加我的住房</Text>
            <Image src={sw01bg} ></Image>
          </View>
          <View>

            <Image src={sw01bg} ></Image>
          </View>
        </View>
      </View>

      {/*  */}
      <View className='fjhq'>
        <View className='left'>
          <Text>房价行情</Text>
          <Text>24678</Text>
        </View>
        <View className='right'>
          <Text>房价地图</Text>
        </View>

      </View>

      <View className='tuangou'>
        <View className='title'>
          <Text>
            <h2>心选好房团购</h2>
          </Text>
          <Text>
            <AtCountdown
              format={{ hours: ':', minutes: ':', seconds: '' }}
              seconds={100}
            />
            离场结束
          </Text>
        </View>


      </View>

      <AtCard
        extra='额外信息'
        title='这是个标题'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        <View className='content'>

          <View className='left'>
            <Image src={sw01bg} ></Image>

          </View>
          <View className='center'>

          </View>
          <View className='right'></View>

        </View>
        <AtDivider></AtDivider>
        <View className='btns'></View>
        <View className='btn-bottom'></View>
      </AtCard>
    </>
  )
}
export default Index
