
import axios from 'axios'
import { app } from '@config'

export const maxNumberOfChallengesPerIssuer = async () => {
    const url = `${app.super_admin_api_link}/clients/${app.namespace}/max-number-of-challenge-per-issuer`
    const max_number_of_challenges_per_issuer = await axios({
        method: 'GET',
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return max_number_of_challenges_per_issuer
};
export const maxNumberOfIssuers = async () => {
    const url = `${app.super_admin_api_link}/clients/${app.namespace}/max-number-of-issuers`
    const max_number_of_challenges_per_issuer = await axios({
        method: 'GET',
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return max_number_of_challenges_per_issuer
};