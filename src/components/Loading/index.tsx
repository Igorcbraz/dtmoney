import Lottie from 'react-lottie';
import loadingBlue from './loading.json'
import loadingWhite from './loadingWhite.json'

interface LoadingProps{
    width: number;
    height: number;
    isWhite?: boolean
}

export function Loading({ width, height, isWhite = false }: LoadingProps){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: isWhite ? loadingWhite : loadingBlue,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <Lottie 
            options={defaultOptions}
            height={height}
            width={width}
        />
    )
}