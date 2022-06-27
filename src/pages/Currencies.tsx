import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Card, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../redux/api/cryptoApi';

type CurrenciesProps = {
  simplified?: boolean;
};

type Coins = {
  uuid: string;
  name: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
  rank: number;
};

type filterItem = {
  name: string;
};

const Currencies: React.FC<CurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 20 : 100;
  const [value, setValue] = React.useState<string>('');
  const { data: list, isFetching } = useGetCryptosQuery(count);
  const [items, setItems] = React.useState<Coins[]>([]);
  React.useEffect(() => {
    const filterData = list?.data?.coins.filter((item: filterItem) =>
      item.name.toLowerCase().includes(value),
    );
    setItems(filterData);
  }, [list, value]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.toLowerCase());
  };

  if (isFetching) return <>Loading</>;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={onChangeInput} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {items?.map((obj: Coins) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={obj.uuid}>
            <Link to={`/crypto/${obj.uuid}`}>
              <Card
                title={`${obj.rank}. ${obj.name}`}
                extra={<img className="crypto-image" src={obj.iconUrl} alt="icon" />}
                hoverable>
                <p>Price:{millify(+obj.price)}</p>
                <p>Market Cap:{millify(+obj.marketCap)}</p>
                <p>Daily Change:{millify(+obj.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Currencies;
