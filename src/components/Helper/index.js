import React, { Component } from 'react';
import { Layout, Menu, Icon, Collapse, Divider } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
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
        let arr = ['1', '2', '3']
        var div = document.getElementById(e.key);
        arr.map(v => {
            if (v !== e.key) {
                var div_temp = document.getElementById(v);
                div_temp.style.display = "none";
            }
        })
        div.style.display = 'block';
    }

    render() {
        return (
            <div>
              <Divider/>
                <Layout>
                    <Sider
                        breakpoint="1g"
                        collapsedWidth="500"
                        style={{ heiht:'87vh'}}
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
                                <span className="nav-text">术语解释</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="user"/>
                                <span className="nav-text">排版之后</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="compass"/>
                                <span className="nav-text">常见问题</span>
                            </Menu.Item>
                         </Menu>

                    </Sider>

                    <Layout>
                        <Content style={{margin: '20px 16px 0'}}>
                            <div id="1" style={{display:"block", padding: 24, background: '#fff', minHeight: '87vh'}}>
                                <Collapse bordered={false} disabled={false}>
                                    <Panel header="排版前选项含义" key="4"  style={customPanelStyle}>
                                        <h3>规范标点</h3>
                                        <p>　　此功能将智能修改中英文标点，将不合适的中文标点修改为英文标点，
                                            将不合适的英文标点修改为中文标点， 自动跳过文献区域和封面区域。适用于写作过程中不注意中英文标点切换，或者抄抄写写得到的文档等。
                                        </p>
                                        <h3>尾转注文本</h3>
                                        <p>　　此功能将尾注删除并替换为上标法标注参考文献的形式，同时把尾注内容作为
                                            参考文献插入到对应位置。删除过程中将交叉引用也同时转换，且转换为上标法标注文献
                                            的方式。 </p><p>　　如果以后想还原为尾注形式，可以通过Word百宝箱或者在线转编号来实现。适用于使用尾注来
                                            标注参考文献，并准备排版后最终定稿打印的文档。
                                        </p>
                                        <h3>清理无实例样式</h3>
                                        <p>　　多人合并写文档，或者从其他文档中复制内容过来时，带了很多样式，导致样式侧边栏中很难找到想要的样式，不方便编辑。</p><p>　　清理无实例样式将在排版完成后将没有用到的样式清理掉，方便文档的进一步编辑。
                                        </p>
                                    </Panel>
                                    <Panel header="排版后版本选择" key="5" style={customPanelStyle}>
                                        <h3>标准版</h3>
                                        <p>　　通过样式来排版文档。</p><p>　　优点：可以进一步通过调整样式来快速调整排版效果；缺点：可
                                            能在不同Word编辑环境下显示效果有变化。适用于写作过程中的排版。</p>
                                        <h3>无样式版</h3>
                                        <p>　　取消所有样式，直接通过具体格式来排版文档。</p><p>　　优点：在不同Word编辑
                                            环境下显示效果有变化的可能性低；缺点：编辑格式要逐一进行。适用于完稿打印。</p>
                                        <h3>带审阅版</h3>
                                        <p>　　一是通过审阅功能将排版过程中所有与内容修改和部分格式修改标示出 来，主要包括空格
                                            修改、标点、编号和目录修改等。具体的修改通过不同审阅者来分类显示， 包括“目录
                                            修订器”、“内容修订器”、“格式修订器”等。</p><p>　　二是通过批注功能将检查出的各种
                                            可能存在的问题，比如编号不连续、重复和无内容等问题，编号不合适用法等标示到具体位置。
                                            适用于熟悉审阅批注的用户进行文档校对。</p>
                                    </Panel>
                                </Collapse>
                            </div>

                            <div id="2"  style={{display:"none" , padding: 24, background: '#fff', minHeight: '87vh'}}>
                                <Collapse bordered={false} disabled={false}>
                                <Panel header="排版后的手工处理？" key="6" style={customPanelStyle}>
                                    <p>　　排版功能强大，但是不能处理与内容相关的地方。主要的问题是，如果遇到比较大的图，上面
                                        一页放不下，要排版到下面一页中，导致上页下端有很大的空白，这不符合排版要求。
                                    </p><p>　　本网站中提供Word百宝箱可以检查出这种位置，并辅助选择调整区域，具体是否能调整，不影响内容的表达，需要用户自己参与。
                                    </p><p>　　对于排版要求比较高的场合，如果排版过程中选择了规范标点，格式清理，建议浏览全文。</p>
                                </Panel>
                                </Collapse>
                            </div>

                            <div id="3" style={{display: "none", padding: 24, background: '#fff', minHeight: '87vh' } }>
                                <Collapse bordered={false} disabled={false}>
                                 <Panel header="排版结果与相关规范有出入？" key="7" style={customPanelStyle}>
                                        <p>　　本网站整理的模板是依据是相关规范，范例或者模板。一些学校对论文的要求不具体不规范，且不同学院有不同
                                            要求，加大了整理模板的难度。还希望得到广大用户的反馈。整理模板格式过程中，范例或者模板与规范发生冲突
                                            时，主要以规范要求为准，特殊情况按照模板处理。当缺失的部分格式要求时，以美观整齐为原则，参考文档排
                                            版的国家标准，进行修补。</p><p>　　另外，部分封面依照原来封面进行了重新设计，不正确的地方请联系我们修改。联系方式详见联系中心。
                                        </p>
                                    </Panel>
                                 <Panel header="排版视觉效果相同，但是与规范具体设置不同？" key="8" style={customPanelStyle}>
                                        <p>　　在建立模板时，尽量保证使用模板的效果与规范一致，但实现途径不一定相同，不会影响打印效果。
                                        </p>
                                    </Panel>
                                 <Panel header="排版结果中，目录中的页码不正确，如何处理？" key="9" style={customPanelStyle}>
                                        <p>　　目录页码是排版前的文字所在的页码，排版后会发生变化，考虑到自动排版后都需要人工检查再处理，这往往会导致页码变化，所以没有更新目录页码。 </p><p>　　具体处理方法：下载后用Microsoft Office Word打开，选中目录，按F9手动刷新就。
                                        </p>
                                    </Panel>
                                 <Panel header="有时自动插入封面，有时没有自动插入，是怎么回事？" key="10" style={customPanelStyle}>
                                        <p>　　考虑到用户的提交的源文档可能是有封面，也可能是没有封面的。排版过程会自动判断封面的位置。所以如果
                                            源文档是开门见山的，开始正文部分，就自动加上封面，否则不增加。 </p><p>　　另外，如果源文档有封面，那么排版过
                                            程将封面中所有的样式取消，并保留原来的格式。
                                        </p>
                                    </Panel>
                                 <Panel header="页眉有时自动修改了，有时没有？" key="11" style={customPanelStyle}>
                                        <p>　　上传文档中有复杂页眉信息时，不修改用户的页眉，否则按照模板中的页眉信息修改 </p><p>　　将在自定义排版中将开放相关选项。
                                    </p>
                                    </Panel>
                                 <Panel header="上传文档生成方案" key="12" style={customPanelStyle}>
                                        <p>　　排版方案主要由排版选项和排版模板组成，排版模板可以通过上传已排版好的文档自动分析其中的格式信息，生成排版用的模板，同时使用默认的排版选项 </p><p>　　排版选项自定义的功能还在开发中。
                                    </p>
                                    </Panel>
                                 <Panel header="Word灵感百宝箱与本网站" key="13" style={customPanelStyle}>
                                        <p>　　Word灵感百宝箱是Word插件形式的早期作品，是国内外通用型Word插件中功能最多的插件，未来将被修改为本网站的客户端 </p><p>　　请关注本网站的最新动态。
                                    </p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                <Divider/>
            </div>
        )
    }
};

export default App;
