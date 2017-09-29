import React, {Component} from 'react';
import './Content.css'
import {Row, Col, Input} from 'antd'
import header from './Header99.jpg';
const Search = Input.Search
export default class Content extends Component {
    render() {
        
        return (
            <div>
                <div className="grid1">
                 <img src={header} className="imghd"/>
                </div>   
                <div className="grid3">
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/เขาแผงม้า-mini-marathon-2017-1506228391539.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                                เขาแผงม้า
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/ปิดกองพันวิ่งเขาอีโต้-1506327022943.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               ปิดกองพันวิ่ง@เขาอีโต้
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/เดิน-วิ่งเฉลิมพระเกียรติ-มินิฮาล์ฟมาราธอน-มหิดลรำลึก-ครั้งที่-1-1506325505874.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                                เดิน วิ่งเฉลิมพระเกียรติ มินิฮาล์ฟมาราธอน มหิดลรำลึก ครั้งที่ 1 
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/globe-athon-2017-วิ่งด้วยใจให้น้อง-ป้องกันมะเร็งปากมดลูก-1506224590441.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/ku-mktg-run2017-1506191277835.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/rayong-together-run-mini-marathon-2017-1506148891028.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article> 
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/sdn-run-for-friends-1506134468013.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/ปิดกองพันวิ่งเขาอีโต้-1506327022943.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>
                        <article className="col">
                            <div className="imgbox">
                                <img src="https://storage.googleapis.com/storage.thai.run/events/cover/ปิดกองพันวิ่งเขาอีโต้-1506327022943.jpg" className="imgcol"/>
                            </div>
                            <div className="textcontrol">
                               Yeen
                            </div>
                            <div className="inputcontrol">
                                <Row>
                                    <Col span={18} offset={3}>
                                        <Search  size="large" placeholder="bib number"  
                                        onSearch={value => console.log(value)} />
                                    </Col>
                                </Row>    
                            </div>   
                        </article>     
                </div>
            </div>      
        );
    }
}