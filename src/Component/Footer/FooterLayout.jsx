import "./FooterLayout.scss";
export default function FooterLayout() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Thông tin</h3>
              <ul className="list-footer">
                <li>
                  <p>Giới thiệu</p>
                </li>
                <li>
                  <p>Chính sách bảo mật</p>
                </li>
                <li>
                  <p>Điều khoản sử dụng</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Điều hướng</h3>
              <ul className="list-footer">
                <li>
                  <p>Trang chủ</p>
                </li>
                <li>
                  <p>Tin tức</p>
                </li>
                <li>
                  <p>Vũ khí, trang bị</p>
                </li>
                <li>
                  <p>Liên hệ: <b> manhd5749@gmail.com</b></p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Đăng ký nhận tin</h3>
              <p>Đăng ký để nhận thông tin mới nhất từ chúng tôi: </p>
              <form>
                <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                <button type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="copy">
                © 2023 Mạnh Cường - Military knowledge sharing web serves the
                sole purpose of learning and sharing. Contact us for any
                copyright or other issues before reporting
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
