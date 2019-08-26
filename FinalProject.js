import React, { Component } from 'react';
import { AppRegistry, ViewPagerAndroid, ScrollView, TouchableHighlight, Alert, View, Text, StyleSheet, Button, Image, TextInput} from 'react-native';

export default class CurrencyConvert extends Component {

  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 1, name1: '', name2: ''};
  }

  _onPressButton = (position) => {
    this.refs.viewPage.setPage(position);
  }

  countryPress1 = (param, param1) => {
       this.setState({
         count1: param,
         name1: param1
       }, () => {
         const {name1} = this.state;
         Alert.alert('你選擇了' + this.state.name1)
       });
  }

  countryPress2 = (param, param1) => {
       this.setState({
         count2: param,
         name2: param1
       }, () => {
         const {name2} = this.state;
         Alert.alert('你選擇了' + this.state.name2)
       });
  }

  render() {
      const titleFontSize = 28;
      const sectionFontSize = 24;
      const w = 220;
      const h = 130;
      return (
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          ref="viewPage"
        >

        <View style={styles.pageStyle1} key="0">
            <Text style={{ fontSize: 30 ,color:'#DC143C', fontWeight:'bold'}}>
              輸入要轉換的金額
            </Text>
            <TextInput style={{fontSize:50, height: 80, borderColor: '#000000', borderWidth: 6 }}
                              onChangeText={(t) => this.setState({ t1: t })}/>

            <View style={styles.Buttonstyle}>
            <Button
              onPress={this._onPressButton.bind(this, 0)}
              title="1"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 1)}
              title="2"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 2)}
              title="3"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 3)}
              title="4"
              color="#1E90FF"
            />
            </View>
          </View>

          <View style={styles.pageStyle2} key="1">
          <View>
            <Text style={{ fontSize: 30, textAlign: 'center' ,color:'#DC143C', fontWeight:'bold'}}>
               請選擇自己的國家
            </Text>
            <View style={{width: 360, height: 200, backgroundColor: '#FFCC00'}} />
            <ScrollView horizontal={true}>
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*1.0, '新台幣')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/188px-Flag_of_the_Republic_of_China.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>新台幣 (TWD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*30.032, '美金')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/188px-Flag_of_the_United_States.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>美金 (USD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*3.848, '港幣')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/188px-Flag_of_Hong_Kong.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>港幣 (HKD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*40.52, '英鎊')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/188px-Flag_of_the_United_Kingdom.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>英鎊 (GBP)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*22.9, '澳幣')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/188px-Flag_of_Australia.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>澳幣 (AUD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*23.42, '加拿大幣')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/188px-Flag_of_Canada.svg.png' }}
                  style={{ width: w, height: h }}
              />
              </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>加拿大幣 (CAD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*22.59, '新加坡幣')}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/188px-Flag_of_Singapore.svg.png' }}
                  style={{ width: w, height: h }}
                />
                </TouchableHighlight>
                <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>新加坡幣 (SGD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*30.59, '瑞士法郎')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/143px-Flag_of_Switzerland.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>瑞士法郎 (CHF)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*0.276, '日圓')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/188px-Flag_of_Japan.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>日圓 (JPY)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*2.4, '南非幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/188px-Flag_of_South_Africa.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>南非幣 (ZAR)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*3.51, '瑞典幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/188px-Flag_of_Sweden.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>瑞典幣 (SEK)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*21.17,'紐元')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/188px-Flag_of_New_Zealand.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>紐元 (NZD)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*0.972, '泰幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/188px-Flag_of_Thailand.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>泰幣 (THB)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*0.6271, '菲國比索')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/188px-Flag_of_the_Philippines.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>菲國比索 (PHP)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*0.00248, '印尼幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/188px-Flag_of_Indonesia.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>印尼幣 (IDR)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*35.34, '歐元')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Euro_symbol.svg/225px-Euro_symbol.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>歐元 (EUR)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*0.02995, '韓元')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/188px-Flag_of_South_Korea.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>韓元 (KRW)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() =>this.countryPress1(this.state.t1*0.00144, '越南盾')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/188px-Flag_of_Vietnam.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>越南盾 (VND)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*8.03, '馬來幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/188px-Flag_of_Malaysia.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>馬來幣 (MYR)</Text>
              </View>
              <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
              <View>
              <TouchableHighlight onPress={() => this.countryPress1(this.state.t1*4.719, '人民幣')}>
               <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/188px-Flag_of_the_People%27s_Republic_of_China.svg.png' }}
                  style={{ width: w, height: h }}
               />
               </TouchableHighlight>
               <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>人民幣 (CNY)</Text>
              </View>
            </ScrollView>
              </View>

              <View style={styles.Buttonstyle}>
              <Button
                onPress={this._onPressButton.bind(this, 0)}
                title="1"
                color="#1E90FF"
              />
              <Button
                onPress={this._onPressButton.bind(this, 1)}
                title="2"
                color="#1E90FF"
              />
              <Button
                onPress={this._onPressButton.bind(this, 2)}
                title="3"
                color="#1E90FF"
              />
              <Button
                onPress={this._onPressButton.bind(this, 3)}
                title="4"
                color="#1E90FF"
              />
              </View>
            </View>


          <View style={styles.pageStyle2} key="2">
          <View>
          <Text style={{ fontSize: 30, textAlign: 'center',color:'#DC143C', fontWeight:'bold' }}>
             請選擇要轉換的國家
          </Text>
          <View style={{width: 360, height: 200, backgroundColor: '#FFCC00'}} />
          <ScrollView horizontal={true}>
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(1.0, '新台幣')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/188px-Flag_of_the_Republic_of_China.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>新台幣 (TWD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(30.032, '美金')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/188px-Flag_of_the_United_States.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>美金 (USD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(3.848, '港幣')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/188px-Flag_of_Hong_Kong.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>港幣 (HKD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(40.52, '英鎊')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/188px-Flag_of_the_United_Kingdom.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>英鎊 (GBP)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(22.9, '澳幣')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/188px-Flag_of_Australia.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>澳幣 (AUD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(23.42, '加拿大幣')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/188px-Flag_of_Canada.svg.png' }}
                style={{ width: w, height: h }}
            />
            </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>加拿大幣 (CAD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(22.59, '新加坡幣')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/188px-Flag_of_Singapore.svg.png' }}
                style={{ width: w, height: h }}
              />
              </TouchableHighlight>
              <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>新加坡幣 (SGD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(30.59, '瑞士法郎')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/143px-Flag_of_Switzerland.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>瑞士法郎 (CHF)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.276, '日圓')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/188px-Flag_of_Japan.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>日圓 (JPY)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(2.4, '南非幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/188px-Flag_of_South_Africa.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>南非幣 (ZAR)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(3.51, '瑞典幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/188px-Flag_of_Sweden.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>瑞典幣 (SEK)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(21.17, '紐元')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/188px-Flag_of_New_Zealand.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>紐元 (NZD)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.972, '泰幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/188px-Flag_of_Thailand.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>泰幣 (THB)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.6271, '菲國比索')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/188px-Flag_of_the_Philippines.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>菲國比索 (PHP)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.00248, '印尼幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/188px-Flag_of_Indonesia.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>印尼幣 (IDR)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(35.34, '歐元')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Euro_symbol.svg/225px-Euro_symbol.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>歐元 (EUR)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.02995, '韓元')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/188px-Flag_of_South_Korea.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>韓元 (KRW)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(0.00144, '越南盾')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/188px-Flag_of_Vietnam.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>越南盾 (VND)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(8.03, '馬來幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/188px-Flag_of_Malaysia.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>馬來幣 (MYR)</Text>
            </View>
            <View style={{width: 10, height: h, backgroundColor: '#FFCC00'}} />
            <View>
            <TouchableHighlight onPress={() => this.countryPress2(4.719, '人民幣')}>
             <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/188px-Flag_of_the_People%27s_Republic_of_China.svg.png' }}
                style={{ width: w, height: h }}
             />
             </TouchableHighlight>
             <Text style={{ fontSize: sectionFontSize, textAlign: 'center' }}>人民幣 (CNY)</Text>
            </View>
          </ScrollView>
            </View>

            <View style={styles.Buttonstyle}>
            <Button
              onPress={this._onPressButton.bind(this, 0)}
              title="1"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 1)}
              title="2"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 2)}
              title="3"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 3)}
              title="4"
              color="#1E90FF"
            />
            </View>
          </View>

          <View style={styles.pageStyle1} key="3">
            <Text style={{ fontSize: 30 ,color:'#DC143C', fontWeight:'bold'}}>
              轉換結果
            </Text>
            <Text style={{fontSize: 50,fontWeight: 'bold'}}>{Math.round(this.state.count1/this.state.count2 * 1000) / 1000}</Text>
            <View style={styles.Buttonstyle}>
            <Button
              onPress={this._onPressButton.bind(this, 0)}
              title="1"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 1)}
              title="2"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 2)}
              title="3"
              color="#1E90FF"
            />
            <Button
              onPress={this._onPressButton.bind(this, 3)}
              title="4"
              color="#1E90FF"
            />
            </View>
          </View>
        </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCC00'
  },
  pageStyle1: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
  },
  pageStyle2: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around'
  },
  Buttonstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 30,
    width: 100
  }
});

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
