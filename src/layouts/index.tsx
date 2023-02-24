import { FloatButton } from 'antd';
import { Button } from 'antd-mobile';
import { FileOutline, MessageOutline } from 'antd-mobile-icons';
import { Link, Outlet, styled } from 'umi';
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
      <Wrapper>
        <Button className="name" color="primary">
          antd
        </Button>
      </Wrapper>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 94 }}
        icon={<FileOutline />}
      >
        <FloatButton />
        <FloatButton icon={<MessageOutline />} />
      </FloatButton.Group>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
