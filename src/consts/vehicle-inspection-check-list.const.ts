export const VehicleInspectionChecklist = {
    auxiliaryBattery: 'Auxiliary Battery',
    fireExtinguisher: 'Fire Extinguisher',
    spareWheel: 'Spare Wheel',
    hydraulicJack : 'Hydraulic Jack',
    rightSideMirror: 'Right Side Mirror',
    leftSideMirror: 'Left Side Mirror',
    vehicleKey: 'Vehicle Key',
    toolKit: 'Tool Kit',
}

export type VehicleInspectionChecklistType = keyof typeof VehicleInspectionChecklist;
