export function transformLandCovers (landCovers) {
  return landCovers.map(({ id, info }) => {
    const { area, name } = info.find(({ area }) => area !== 0)

    return {
      id,
      area,
      name: name.toUpperCase().split(' ').join('_')
    }
  })
}

export function transformLandCoversToArea (name, landCovers) {
  const { area } = landCovers.find((landCover) => landCover.name === name)
  return area
}

export function transformLandParcels (landParcels) {
  return landParcels.map(({ id, sheetId, area }) => ({ id, sheetId, area }))
}
