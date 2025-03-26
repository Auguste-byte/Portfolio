import Header from "../components/Header/Header";


const MainLayout = ({children}) => (
    <div  style={{
        // backgroundImage: `url(${background})`,
        backgroundColor: "white",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}>
        <Header />
        <main>{children}</main>
    </div>
)

export default MainLayout;