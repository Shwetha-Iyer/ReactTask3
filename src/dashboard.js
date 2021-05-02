import Row1cards from "./row1cards";
import Row3cards from "./row3cards";
import Row4cards from "./row4cards";
export default function Dashboard(){
    var row1data = [{
        border: "card border-left-primary shadow h-100 py-2",
        text: "text-xs font-weight-bold text-primary text-uppercase mb-1",
        title: "Earnings (Monthly)",
        value: "$40,000",
        icon: "fas fa-calendar fa-2x text-gray-300"
    },{
        border: "card border-left-success shadow h-100 py-2",
        text: "text-xs font-weight-bold text-success text-uppercase mb-1",
        title: "Earnings (Annual)",
        value: "$215,000",
        icon: "fas fa-dollar-sign fa-2x text-gray-300"
    },{
        border: "card border-left-info shadow h-100 py-2",
        text: "text-xs font-weight-bold text-info text-uppercase mb-1",
        title: "Tasks",
        value: "50%",
        icon: "fas fa-clipboard-list fa-2x text-gray-300"
    },{
        border: "card border-left-warning shadow h-100 py-2",
        text: "text-xs font-weight-bold text-warning text-uppercase mb-1",
        title: "Pending Requests",
        value: "18",
        icon: "fas fa-comments fa-2x text-gray-300"
    }];
    var progressbar = [{
        title: "Server Migration",
        label: "20%",
        percent: "20",
        styles: "progress-bar bg-danger"
    },{
        title: "Sales Tracking",
        label: "40%",
        percent: "40",
        styles: "progress-bar bg-warning"
    },{
        title: "Customer Database",
        label: "60%",
        percent: "60",
        styles: "progress-bar"
    },{
        title: "Payout Details",
        label: "80%",
        percent: "80",
        styles: "progress-bar bg-info"
    },{
        title: "Account Setup",
        label: "Complete",
        percent: "100",
        styles: "progress-bar bg-success"
    }];
    var colours =[{
        stylees: "card bg-primary text-white shadow",
        title: "Primary",
        text:"#4e73df"
    },{
        stylees: "card bg-success text-white shadow",
        title: "Success",
        text:"#1cc88a"
    },{
        stylees: "card bg-info text-white shadow",
        title: "Info",
        text:"#36b9cc"
    },{
        stylees: "card bg-warning text-white shadow",
        title: "Warning",
        text:"#f6c23e"
    },{
        stylees: "card bg-danger text-white shadow",
        title: "Danger",
        text:"#e74a3b"
    },{
        stylees: "card bg-secondary text-white shadow",
        title: "Secondary",
        text:"#858796"
    },{
        stylees: "card bg-light text-black shadow",
        title: "Light",
        text:"#f8f9fc"
    },{
        stylees: "card bg-dark text-white shadow",
        title: "Dark",
        text:"#5a5c69"
    }]
    return <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div class="row">
        {
            row1data.map((obj)=>{
                return <Row1cards data={obj}></Row1cards>
            })
        } 
    </div>
    <div className="row">
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                    </h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">
                                Dropdown Header:
                            </div>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="myAreaChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-5">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Revenue Sources
                    </h6>
                    <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">
                            Dropdown Header:
                        </div>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart"></canvas>
                </div>
                <div class="mt-4 text-center small">
                    <span class="mr-2">
                        <i class="fas fa-circle text-primary"></i> Direct
                    </span>
                    <span class="mr-2">
                        <i class="fas fa-circle text-success"></i> Social
                    </span>
                    <span class="mr-2">
                        <i class="fas fa-circle text-info"></i> Referral
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div class="card-body">
                {
                     progressbar.map((obj)=>{
                        return <Row3cards datas={obj}></Row3cards>
                     })
                }
            </div>
        </div>
        <div class="row">
            {
                colours.map((obj)=>{
                    return <Row4cards items={obj}></Row4cards>
                })
            }
        </div>
    </div>
    <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="img/undraw_posting_photo.svg" alt="..."/>
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of 
                    <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                        constantly updated collection of beautiful svg images that you can use
                        completely free and without attribution!
                </p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
            </div>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
            </div>
            <div class="card-body">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                    CSS bloat and poor page performance. Custom CSS classes are used to create
                    custom components and custom utility classes.
                </p>
                <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
            </div>
        </div>
    </div>
</div>


    </>
}