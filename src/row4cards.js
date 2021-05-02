export default function Row4cards(props){
    return <>
    <div class="col-lg-6 mb-4">
        <div class={props.items.stylees}>
            <div class="card-body">
                {props.items.title}
                <div class="text-white-50 small">{props.items.text}</div>
            </div>
        </div>
    </div>
    </>
}