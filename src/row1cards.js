export default function Row1cards(props){
    return <>
    <div class="col-xl-3 col-md-6 mb-4">
        <div class={props.data.border}>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class={props.data.text}>
                            {props.data.title}
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {props.data.value}
                        </div>
                    </div>
                    <div class="col-auto">
                        <i class={props.data.icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}