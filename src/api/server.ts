let token ='01c5d8ed3be665f1d90ced000de4109c910abdff85a29d5b'

// if you want to use brandon's site... remove token, use https://plankton-app-46k8b.ondigitalocean.app/api/contacts

export const server_calls = {
    get:async () => {
        const response = await fetch('https://grandiose-olivine-trollius.glitch.me/api/whiskey',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://grandiose-olivine-trollius.glitch.me/api/whiskey',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,   
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://grandiose-olivine-trollius.glitch.me/api/whiskey/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://grandiose-olivine-trollius.glitch.me/api/whiskey/${id}`,
        {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }

        return;
    }
}