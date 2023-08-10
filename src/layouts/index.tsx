import { Outlet, styled } from 'umi';
import styles from './index.less';
const Wrapper = styled.div`
  .name {
    font-size: 60px;
    color: orange;
  }
`;
export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
    </div>
  );
}
