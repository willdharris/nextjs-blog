import { Avia, PlayerOptionsInterface, ResourceConfigurationInterface, Autoplay } from '@cbsinteractive/avia-js-react';
import { useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import styles from './player.module.css'

export default function Player() {
    const [options, setOptions] = useState<PlayerOptionsInterface>({
        container: '#videoPresentationContainer',
        autoplay: Autoplay.ATTEMPT_MUTED,
    });

    const [resource, setResource] = useState<ResourceConfigurationInterface>({
        location: {
            mediaUrl: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        },
    });

    return (
        <>
            <div className={styles.player}>
                <Avia
                    options={options}
                    resource={resource}
                    hls={true}
                    dash={true}
                    onPlayerChange={player => console.log(player)}
                    onError={error => console.log(error)}
                    controls
                    debug
                />
            </div>
        </>
    );
};