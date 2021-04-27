import {Fragment} from 'react';

const Loader = ({name}) => (
    <Fragment>
        <h3>Loading {name}...</h3>
        <div class="lds-dual-ring"></div>
    </Fragment>
);

export default Loader;