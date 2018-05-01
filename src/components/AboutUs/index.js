import React, { Component } from 'react';
import { Layout, Menu, Icon, Collapse, Button } from 'antd';
import styles from './index.css'

const {
  Header, Content, Footer, Sider,
} = Layout;
const Panel = Collapse.Panel;


const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class App extends React.Component {
    handleClick = (e) => {
      const arr = ['1', '2', '3', '4'];
      const div = document.getElementById(e.key);
      arr.map((v) => {
        if (v !== e.key) {
          const div_temp = document.getElementById(v);
          div_temp.style.display = 'none';
        }
      });
      div.style.display = 'block';
    }


    render() {
      return (
            <div>
             <Button type ='primary' id = 'button'>test</Button>
                <Layout>
                    <Sider
                        breakpoint="1g"
                        collapsedWidth="200"
                        style={{ heiht: '87vh' }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo">
                            <br/><br/><br/><br/>
                        </div>
                        <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="form"/>
                                <span className="nav-text">产品</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="compass"/>
                                <span className="nav-text">愿景</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="user"/>
                                <span className="nav-text">成员</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="smile"/>
                                <span className="nav-text">获奖</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout>

                        <Content style={{ margin: '20px 16px 0' }}>
                            <div id="1" style={{
display: 'block', padding: 24, background: '#fff', minHeight: '87vh',
}}>
                                <Collapse bordered={false} disabled={false}>
                                    <Panel header="在线智能排版" key="4" style={customPanelStyle}>
                                        <p>　　高度智能化排版长文档，能排版多种类型长文档。</p><p>　　当前主要针对学位论文排版：5秒排版好博士论文，3秒排好
                                            硕士论文，秒杀本科论文，再也不用担心论文格式问题。</p><p>　　2018年将陆续开发学术期刊排版和公文排版等功能。
                                            具体请参考帮助中心。</p>
                                    </Panel>
                                    <Panel header="文本转自动编号" key="5" style={customPanelStyle}>
                                        <p>　　极速智能转换文本编号为对应的多级编号、题注、尾注和交叉引用，修补缺失编号，调整编号引用位置为交叉
                                            引用，以方便合并长文档与多人协作编辑文档。</p><p>　　2018年上半年将上线，
                                            您可以<a href="http://aidocx.net/word" target="_blank " rel="noopener noreferrer">提前体验</a>。</p>
                                    </Panel>
                                    <Panel header="公式修复与转换" key="6" style={customPanelStyle}>
                                        <p>　　一是批量将所有公式转换为Word公式（Omath公式），包括损坏的MathType公式与公式域；
                                            二是批量将所有公式转换为MathType公式，包括损坏的MathType公式、公式域和Omath公式。</p><p>　　2018年上半年将上线，您可以<a href="http://aidocx.net/word" target="_blank" rel="noopener noreferrer">提前体验</a>。
                                        </p>
                                    </Panel>
                                    <Panel header="Word百宝箱" key="7" style={customPanelStyle}>
                                        <p>　　Word百宝箱（原名Word灵感百宝箱，）是一款国内外功能最强大最丰富的Microsoft Office Word通用型插件。
                                        </p><p>　　Word灵感百宝箱下载地址：<a href="http://www.xiazaiba.com/tags/t102604-1.html" target="_blank" rel="noopener noreferrer">Word灵感百宝箱（兼容64位office）</a>，
                                            <a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=word%E7%81%B5%E6%84%9F%E7%99%BE%E5%AE%9D%E7%AE%B1&rsv_pq=fcaaeaa80000c05a&rsv_t=5118Nbl%2Bv99QB9horeQdaA8tu2Y26sQyuZnAbkfAejqtCFRDHuXg3rKX87Y&rqlang=cn&rsv_enter=1&rsv_sug3=10&rsv_sug1=1&rsv_sug7=100" target="_blank" rel="noopener noreferrer">Word灵感百宝箱（32位office）</a>。
                                           </p>
                                    </Panel>
                                    <Panel header="其它在线工具" key="8" style={customPanelStyle}>
                                        <p>　　集成文档处理中常用优秀工具，部分经过技术处理，省去用户安装软件的麻烦。</p>
                                    </Panel>
                                </Collapse>
                            </div>

                            <div id="2" style={{
 display: 'none', padding: 24, background: '#fff', minHeight: '87vh',
}}>
                                <Collapse bordered={false}>
                                    <Panel header="文档处理智能化" key="9" style={customPanelStyle}>
                                        <p>　　先解决智能化排版问题，逐步扩展到写作其它领域，用智能化的方法创造性地减少文档处理中重复性操作，提高写作效率和排版效果，提升文档分享体验</p><p>　　提供在线工具、本地端软件，还将提供手机端APP，部分功能集成了第三方工具</p>
                                    </Panel>
                              </Collapse>
                            </div>
                            <div id="3" style={{
display: 'none', padding: 24, background: '#fff', minHeight: '87vh',
}}>
                                <Collapse bordered={false}>
                                    <Panel header="在线排版内核与Word百宝箱开发" key="10" style={customPanelStyle}>
                                        <p>　　华中科技大学管理学院信息管理与管理信息系统系，龚晓光</p><p>　　联系方式：微信：cuteword</p>
                                    </Panel>
                                    <Panel header="其它开发与网站维护" key="11" style={customPanelStyle}>
                                        <p>　　华中科技大学启明学院Wesharp团队（挂靠管理学院，指导老师：龚晓光等）等。</p>
                                    </Panel>
                                </Collapse>
                            </div>
                            <div id="4" style={{
 display: 'none', padding: 24, background: '#fff', minHeight: '87vh',
}}>
                                <Collapse bordered={false}>
                                    <Panel header="比赛获奖" key="12" style={customPanelStyle}>
                                        <p>　　2017年互联网+创新创业国赛优胜奖。</p>
                                    </Panel>
                                 </Collapse>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
      );
    }
}

export default App;
