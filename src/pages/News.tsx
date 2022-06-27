import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetNewsQuery } from '../redux/api/newsApi';
import { useGetCryptosQuery } from '../redux/api/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

type NewsProps = {
  simplified?: boolean;
};

const News: React.FC<NewsProps> = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = React.useState<any>('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: news } = useGetNewsQuery({
    newsCategory,
    count,
  });

  if (!news?.value) return <>Loading</>;
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }>
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency: any) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {news.value.map((obj: any, i: number) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={obj.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {obj.name}
                  </Title>
                  <img
                    style={{ maxWidth: '200px', maxHeight: '100px' }}
                    src={
                      obj?.image?.thumbnail?.contentUrl ||
                      'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
                    }
                    alt="contentImg"
                  />
                </div>
                <p>
                  {obj.description.length > 100
                    ? `${obj.description.substring(0, 100)}...`
                    : obj.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        obj.provider[0]?.image?.thumbnail?.contentUrl ||
                        'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
                      }
                      alt=""
                    />
                    <Text className="provider-name">{obj.provider[0]?.name}</Text>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
