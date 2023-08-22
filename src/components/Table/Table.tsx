import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Table.module.scss';
const tabItems = [
  'all',
  'confirmed',
  'processing',
  'picked',
  'shipping',
  'shipped',
  'cancelled',
];

const tableHeaders = [
  'order ID',
  'product',
  'date',
  'customer',
  'revenue ₦',
  'net profit',
  'status',
  'action',
];

const dataArray = [
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'complete',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'complete',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'pending',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'failed',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'pending',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'pending',
    action: 'View',
  },
  {
    id: '#340980456',
    name: 'Luxury female handbag',
    date: '2 mins ago',
    customer: 'Jacob Samson',
    revenue: '45,000',
    profit: '5,600',
    status: 'pending',
    action: 'View',
  },
];

const Table = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>orders</p>
        <div className={styles.time}>
          <span>
            Last 7 days
            <MdKeyboardArrowDown />
          </span>
          <span>
            Export
            <MdKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableTabs}>
          {tabItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th className={styles.tableHeader} key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataArray.map((rowData, index) => (
              <tr key={index}>
                <td className={styles.bodyColumn}>{rowData.id}</td>
                <td className={styles.bodyColumn}>{rowData.name}</td>
                <td className={styles.bodyColumn}>{rowData.date}</td>
                <td className={styles.bodyColumn}>{rowData.customer}</td>
                <td className={styles.bodyColumn}>{rowData.revenue}</td>
                <td className={styles.bodyColumn}>{rowData.profit}</td>
                <td
                  className={`${styles.bodyColumn} ${
                    rowData.status === 'complete'
                      ? styles.complete
                      : rowData.status === 'pending'
                      ? styles.pending
                      : rowData.status === 'failed'
                      ? styles.failed
                      : ''
                  }`}
                >
                  {rowData.status}
                </td>
                <td className={styles.bodyColumn}>{rowData.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
