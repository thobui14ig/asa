import { DoubleRightOutlined, PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React from "react";
import useTeam from "./modules/Team";
import './team.scss';

const Team: React.FC  = ()=> {
    const { handleAddProject, data } = useTeam()

    return(
        <div className="team">
            <div className="content">
                <div className="member">
                    <h1 className="title">Members(1)</h1>
                    <div className="list-members">
                        <Button style={{ width: 170,  height: 50, marginRight: 10, marginTop: 10 }}  type="primary"><PlusOutlined />Add member</Button>
                        <div className="member-item">1</div>
                        <div className="member-item">2</div>
                        <div className="member-item">3</div>  
                        <div className="member-item">4</div>
                        <div className="member-item">5</div>
                        <div className="member-item">6</div>  
                        <div className="member-item">7</div>
                        <div className="member-item">8</div>
                        <div className="member-item">9</div>  
                        <div className="member-item">10</div>
                        <div className="member-item">11</div>
                        <div className="member-item">12</div> 

                    </div>
                </div>
                <div className="project">
                    <h1 className="title">Projects(1)</h1>
                    <Button onClick={() => handleAddProject()} style={{  width: 170,  height: 50, marginRight: 10, marginTop: 10 }}   type="primary"><PlusOutlined />Add project</Button>
                    
                    <div className="list-projects">
                        {/* <InfiniteScroll
                        dataLength={data.length}
                        next={loadMoreData}
                        hasMore={data.length < 50}
                        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget="scrollableDiv"
                        > */}
                            <List
                            dataSource={data}
                            renderItem={item => (
                                <List.Item key={item._id}>
                                <List.Item.Meta
                                    avatar={<UnorderedListOutlined style={{ fontSize: '30px', color: '#08c' }} />}
                                    title={<a href="https://ant.design">{item.name}</a>}
                                />
                                <div className="name-details"><span >Details</span><DoubleRightOutlined /></div>
                                </List.Item>
                            )}
                        />
                    {/* </InfiniteScroll> */}

                    </div>
                </div>

            </div>

        </div>
        
    )
}

export default Team
