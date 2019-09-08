import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
})

const setImage = images => {
    type: IMAGES.LOAD_SUCCESS
}

const setError = error => ({
    type: IMAGES.LOAD_FAIL
})