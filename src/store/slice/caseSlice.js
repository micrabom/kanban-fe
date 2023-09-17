import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client_v2 } from '../../config/axios'

export const caseSlice = createSlice({
    name: 'case',
    initialState: {
        casesData : {
            data : {
                columns : []
            },
            cases : [],
            assignees : []
        },
        search : '',
        queryParams : '',
        assigneeFilter: '',
        currentCaseMoved : null,
        cases: [],
        overview: {
            total_open: 0,
            total_in_progress: 0,
            total_closed: 0,
            avg_duration: ''
        },
        comments: [],
        caseClosingReason: [],
        detail: {
            id: '',
            title: '',
            description: '',
            severity: '',
            tags: [],
            duration: null,
            status: null,
            closed_at: null,
            closed_by: null,
            created_at: null,
            created_by: {
                username: null,
                email: null,
                full_name: null
            },
            updated_at: null,
            updated_by: null,
            comments: [],
            alerts: [],
            alert_details : null
        },
        snackbar: {
            create_case: null,
            update_case: null,
            delete_case: null,
            draft_case: null,
        },
        overalltree: {},
        statusFilter: '',
        loading: false,
        error: null,

    },
    reducers: {
        fetchCases: (state, action) => {
            state.cases = [...action.payload]
        },
        fetchOverview: (state, action) => {
            state.overview = { ...action.payload }
        },
        fetchCaseDetail: (state, action) => {
            state.detail = { ...action.payload }
        },
        fetchDetailComments: (state, action) => {
            state.detail.comments = [...action.payload]
        },
        fetchComments: (state, action) => {
            state.comments = [...action.payload]
        },
        createCaseSB: (state, action) => {
            state.snackbar.create_case = action.payload
        },
        deleteCaseSB: (state, action) => {
            state.snackbar.delete_case = action.payload
        },
        updateCaseSB: (state, action) => {
            state.snackbar.update_case = action.payload
        },
        draftCaseSB: (state, action) => {
            state.snackbar.draft_case = action.payload
        },
        fetchTree: (state, action) => {
            state.overalltree = { ...action.payload }
        },
        updateStatusFilter: (state, action) => {
            state.statusFilter = action.payload
        },
        setAlertDetails : (state, action) => {
            state.detail.alert_details = action.payload
        },
        setQueryParams : (state, action) => {
            state.queryParams = action.payload
        },
        updateCaseDetailStatus : (state, action) => {
            const { caseObj } = action.payload
            state.detail.status = caseObj.status
            state.currentCaseMoved = caseObj
        },
        filterAssignee : (state, action) => {
            state.assigneeFilter = action.payload
        },
        setSearch : (state, action) => {
            state.search = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCasesByStatusThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCasesByStatusThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.casesData.cases = action.payload.data
            state.casesData.data.columns = action.payload.data.map((v, index) => ({ id : index, title : v.status , cards : v.cases }))
            state.casesData.assignees = action.payload.assignees
        })
        .addCase(fetchCasesByStatusThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).
        addCase(fetchCaseClosingReasonThunk.pending, (state) => {
          
        })
        .addCase(fetchCaseClosingReasonThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.caseClosingReason = action.payload;
        })
        .addCase(fetchCaseClosingReasonThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const fetchCasesByStatusThunk = createAsyncThunk(
    "cases/fetchCasesByStatus",  async (params, thunk) => {
       
        const queryParams = params['query'] ? `&${params['query']}` : ''
        const assignedTo = params['assignedTo'] ? `&${params['assignedTo']}` : ''
        const search = (params['search'] != '' && params['search'] !== undefined) ? `&search=${params['search']}` : ''
        const config = {
            headers: { Authorization: `Bearer ${params['userdata'].access_token}` }
        };
          try{
            let res = await client_v2.get(`${process.env.REACT_APP_DJANGO_URL}case/groupby-status/?client=${params['client']}${search}${queryParams}${assignedTo}`, config)
                return res.data;
          } catch (error) {
           return thunk.rejectWithValue(error.response.data);
          }
    })

export const fetchCaseClosingReasonThunk = createAsyncThunk(
    "cases/fetchCaseClosingReason",  async (params, thunk) => {
        
        const config = {
            headers: { Authorization: `Bearer ${params['userdata'].access_token}` }
        };
            try{
            let res = await client_v2.get(`${process.env.REACT_APP_DJANGO_URL}caseclosingreason/`, config)
                return res.data;
            } catch (error) {
            return thunk.rejectWithValue(error.response.data);
            }
    })  



// Action creators are generated for each case reducer function
export const { fetchCases, fetchComments, createCaseSB, fetchTree,
    deleteCaseSB, fetchCaseDetail, fetchOverview, fetchDetailComments,
    setAlertDetails, updateStatusFilter, draftCaseSB, setQueryParams,
    updateCaseDetailStatus, filterAssignee, setSearch
} = caseSlice.actions

export default caseSlice.reducer