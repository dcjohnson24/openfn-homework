get('users');

// Follow the mapping spec here
// https://docs.google.com/spreadsheets/d/19ZJaudhQXy3J0lKcm5XdK3_ULNjDVMXaG7tuwlyc1zo/edit#gid=1822444315
fn(state => {

    const addressArray = state.data.map(x => [
        x.address.street,
        x.address.suite,
        x.address.city,
        x.address.zipcode
    ])
        
    const address = addressArray.map(i => i.join(", "));

    const cumbriaKeys = ['Gwenborough', 'Wisokyburgh']
    const cornwallKeys = ['McKenziehaven', 'South Elvis', 'Roscoeview', 'South Christy']
    const essexKeys = ['Howemouth', 'Aliyaview', 'Bartholomebury', 'Lebsackbury']
    const provinceObj = {}
    
    cumbriaKeys.forEach(key => provinceObj[key] = 'Cumbria')
    cornwallKeys.forEach(key => provinceObj[key] = 'Cornwall')
    essexKeys.forEach(key => provinceObj[key] = 'Essex')

    const provinceList = state.data.map(x => provinceObj[x.address.city])

    const phoneList = state.data.map(x => {
        let phoneno = x.phone;
        // Remove extension from phone number e.g. 773-881-2198x5431
        phoneno = phoneno.split('x')[0]
        let result;
        // Add 3 for dashes in phone number
        if (phoneno[0] == '1') {
            result = phoneno.substring(0, 14)
        }
        else {
            result = phoneno.substring(0, 13)
        }
        return result
    })
    
    return { ...state, address, provinceList, phoneList }
});

