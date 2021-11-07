import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";
import Footer from "components/NavBar/Footer";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>Taxa de Sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Taxa de Sucesso</h5>
                        <DonutChart />
                    </div>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    )

}

export default Dashboard;
