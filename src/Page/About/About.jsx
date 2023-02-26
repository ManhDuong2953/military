import "./About.scss";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
import FooterLayout from "../../Component/Footer/FooterLayout";
export default function About() {
  return (
    <>
      <NavBarLayout />
      <div className="about">
        <h1 className="title-about">Giới thiệu</h1>
        <p>
          Chào mừng đến với trang web quân sự của chúng tôi.
          <br /> Đây là một nơi để cập nhật thông tin mới nhất về các hoạt động
          của quân đội, kinh nghiệm của các chiến binh và những cập nhật công
          nghệ mới nhất.
          <br /> Trang web của chúng tôi cung cấp các tin tức và bài viết về
          quân sự, các sự kiện, hoạt động và chính sách mới nhất.
          <br /> Chúng tôi cũng cung cấp thông tin về các trang bị và công nghệ
          mới nhất được sử dụng trong các hoạt động quân sự.
          <br />
          Trang website phục vụ mục đích chia sẻ kiến thức và học tập là chủ yếu. Mọi vấn đề về bản quyền hay khiếu nại vui lòng liên hệ với chúng tối trước khi có bất kì hành động báo cáo nào được thực hiện,
          <br />
          <b>API: <code>Tự viết thủ công file JSON</code></b>
          <br />
          <b>Công nghệ: <code>HTML, CSS, ReactJS</code></b>
          <br />
          <b>Nguồn: <mark>Wikipedia, YouTube, Kiến Thức Quân Sự Channel,...</mark></b>
          <br />
          <b>Coder: Dương Mạnh(HUMG), Công Cường(HUCE)</b>
        </p>
      </div>
      <FooterLayout />
    </>
  );
}
