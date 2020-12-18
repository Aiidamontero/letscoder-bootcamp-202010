import './MyPictograms.scss'
import Pictogram from './Pictogram';

function MyPictograms({ myPictograms, onDeletePictogram }) {
    return (<>
        <section className="my_pictograms">
            {myPictograms && myPictograms.map((pictogram) => (<>
                <Pictogram data={pictogram} deleteOption = {true} onDeletePictogram = {onDeletePictogram}/>
            </>))}
        </section>
    </>)
};

export default MyPictograms;