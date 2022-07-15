import {useMemo} from "react";

export const useGetPagesArray = (pagesCount) => {

    let result = useMemo(() => {
        const pagesArr = [];
        for (let i = 0; i < pagesCount; i++) {
            pagesArr.push(i + 1);
        }
        return pagesArr;
    }, [pagesCount]);;

    return result;
}