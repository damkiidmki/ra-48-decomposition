import Ether from "./Panels/Ether"
import Map from "./Panels/Map"
import Pops from "./Panels/Pops"
import ProgramTV from "./Panels/ProgramTV"
import PanelTemplate from "./PanelTemplate"

export default function SectionPanels(props){
    const { map, ether, programTV, pops} = props

    return (
        <div>
			<PanelTemplate title="Посещаемое">
				<Pops data={pops} />
			</PanelTemplate>
			
			<PanelTemplate title="Карта Германии">
				<Map data={map} />
			</PanelTemplate>
			
			<PanelTemplate title="Телепрограмма">
				<ProgramTV data={programTV} />
			</PanelTemplate>
			
			<PanelTemplate title="Эфир">
				<Ether data={ether} />
			</PanelTemplate>
		</div>
    )
}
