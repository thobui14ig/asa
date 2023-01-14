import { DoubleRightOutlined, PlusOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Button, List } from "antd"

const Projects = ({ handleAddProject, data, navigate }: any) => {
    
    return(
        <div className="project">
            <h1 className="title">Projects(1)</h1>
            <Button onClick={() => handleAddProject()} style={{  width: 170,  height: 50, marginRight: 10, marginTop: 10, background: 'rgb(22, 119, 255)' }}   type="primary"><PlusOutlined />Add project</Button>
            
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
                    renderItem={(item: any) => (
                        <List.Item key={item._id} onClick={() => { navigate(`/project/${item._id}`); }}>
                        <List.Item.Meta
                            avatar={<UnorderedListOutlined style={{ fontSize: '30px', color: '#08c' }} />}
                            title={item.name}

                        />
                        <div className="name-details"><span >Details</span><DoubleRightOutlined /></div>
                        </List.Item>
                    )}
                />
            {/* </InfiniteScroll> */}

            </div>
        </div>
    )
}

export default Projects