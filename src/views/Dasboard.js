import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { LocaleProvider, Layout, Form, Radio, Input, Menu,Avatar,
  Modal, Icon, Table, Button, Row, Col
} from 'antd';
import {connect} from 'react-redux';
import './../assets/common/css/layoutIsat.css';
import logo from './../assets/common/img/logo.png';
import gambar1 from './../assets/common/img/gambar1.jpg';
import gambar2 from './../assets/common/img/gambar2.png';

import 'moment/locale/fr';
const { Header, Sider, Content,Footer } = Layout;
import {dispatchAction, apiCall, commonDispatch} from './../actions';
import {Const} from './../const/Const';
import history from './../controllers/History';
class Dasboard extends React.Component{
  index=0;
  state = {
    collapsed: false,
    dataDasboard:[]
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <div className="d-flex justify-content-center pr-2">
              <img src={logo} style={{width:50,maxWidth:'100%',height:49,borderRadius:25,borderColor:'#fff'}}/>
            </div>
          </div>
          <Menu defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Device</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="shop" />
              <span>Schedule</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="bg-base-clr" style={{ flex:1,justifyContent:'center', background: '#063135',color:'#fff', padding:0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="spanClass">
              <div className="col-lg-12">
              <div className="d-flex justify-content-center">Welcome, Admin</div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <div className="p2">
                    <img src={gambar1} style={{maxWidth:'100%'}}/>
                  </div>
                  <div className="p2">
                    <img src={gambar2} style={{maxWidth:'100%',borderRadius:25,borderColor:'#999',borderWidth:1}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
	}
}
module.exports = connect(state => ({dataDasboard:state.dataDasboard}), dispatch=>({dispatch:dispatch}))(Dasboard);
