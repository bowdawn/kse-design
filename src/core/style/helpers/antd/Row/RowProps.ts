type RowClassName = "ant-row-lg"; 
export const getRowClassName = (classes : RowClassName[] ) : string => {
        return classes.join(" ")
}