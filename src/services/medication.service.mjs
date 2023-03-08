import ky from 'ky'

/*    T O    D O    */
export async function getAll() {
    return await ky.get('https://api.apitalks.store/sukl.cz/dlp-lecivelatky/', {
        headers: {
            'x-api-key': '2XtVMmkBI47t7vydWenufaXdHC6cDICt5rkjQX32'
        }
    }).json()
}