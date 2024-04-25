import useFetchGetData from "../hooks/useFetchData";
import CustomImage from "./CustomImage";
import { IFirebaseResponse, getImageFromFields } from "../interfaces/IFirebaseImage";

function Gallery() {
    const dataImages = useFetchGetData<IFirebaseResponse>('https://firestore.googleapis.com/v1/projects/ynov-wfs/databases/(default)/documents/images')

    return <div className="gallery">
        {dataImages?.loading && <div className="loader">Chargement...</div>}
        {dataImages?.data?.documents.map(d => getImageFromFields(d))
            .map((img, idx) => <CustomImage imgSrc={img.base64Image} imgTitle={img.title} key={`${idx}-${img.title}`} />)}
    </div>
}

export default Gallery;