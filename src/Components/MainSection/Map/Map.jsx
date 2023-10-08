import { Map, Marker } from "pigeon-maps"

const MyMap = () => {
    return (
        <div className="max-w-[1200px] px-5 lg:px-5 xl:px-0 my-5 mx-auto rounded-lg">
            <Map height={300} defaultCenter={[25.7494, 89.2611]} defaultZoom={11}>
                <Marker  width={50} anchor={[25.7494, 89.2611]} />
            </Map>
        </div>
    );
};

export default MyMap;