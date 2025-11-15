const avatars = [
    { name: 'avatar_01', path: '/images/avatars/001.svg' },
    { name: 'avatar_02', path: '/images/avatars/002.svg' },
    { name: 'avatar_03', path: '/images/avatars/003.svg' },
    { name: 'avatar_04', path: '/images/avatars/004.svg' },
    { name: 'avatar_05', path: '/images/avatars/005.svg' },
    { name: 'avatar_06', path: '/images/avatars/006.svg' },
]

export const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length)
    return avatars[randomIndex]
}
